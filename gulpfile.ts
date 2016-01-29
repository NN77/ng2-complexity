import * as gulp from 'gulp';
import * as server from 'gulp-server-livereload';
import * as tinylr from 'tiny-lr';
import * as inject from 'gulp-inject';
import * as concat from 'gulp-concat';
import * as template from 'gulp-template';
import * as jade from 'gulp-jade';
import * as plumber from 'gulp-plumber';
import * as inlineNg2Template from 'gulp-inline-ng2-template';
import * as typescript from 'gulp-typescript';
import * as sourcemaps from 'gulp-sourcemaps';
import * as del from 'del';
import * as runSequence from 'run-sequence';
import * as postcss from 'gulp-postcss';
import * as cssnext from 'postcss-cssnext';
import * as atImport from 'postcss-import';
import * as simpleVars from 'postcss-simple-vars';
import * as nested from 'postcss-nested';
import * as mixins from 'postcss-mixins';
import * as slash from 'slash';
import * as tslint from 'gulp-tslint';
import {Server} from 'karma';
import {join} from 'path';
import * as Builder from 'systemjs-builder';

import {PATH, PORT, LIVE_RELOAD_PORT, APP_BASE, APP_VERSION, DEPS_SRC} from './config';

const lr = tinylr();
const tsProject = typescript.createProject('tsconfig.json');
const processors = [
    atImport,
    mixins,
    cssnext({
        browsers: ['last 2 version', 'safari 5', 'ie > 9', 'opera 12.1', 'ios 6', 'android 2.3'],
        compress: false
    }),
    simpleVars,
    nested
];

//build
gulp.task('build', ['dist:clean'], (done: gulp.TaskCallback) =>
  runSequence(
    [
      'fonts:build',
      'images:build',
      'css:build',
      'html:build',
      'jslib:build',
      //'system:build',
      'tslint',
      'ts:build'
    ],
      'index:build',
    done)
);

gulp.task('build:watch', ['dist:clean'], (done: gulp.TaskCallback) =>
  runSequence(
    [
      'fonts:build',
      'images:build',
      'css:watch',
      'html:watch',
      'jslib:watch',
      //'system:build',
      'ts:watch'
    ],
      'index:watch',
    done)
);

function compileTs(src: string | string[], dest: string, inlineTpl?: boolean): NodeJS.ReadWriteStream {

  let result = gulp.src(src)
    .pipe(plumber())
    .pipe(sourcemaps.init());

  if (inlineTpl) {
    result = result.pipe(inlineNg2Template({ base: PATH.src.base, html: false }));
  }

  return result.pipe(typescript(tsProject))
    .js.pipe(sourcemaps.write())
    .pipe(gulp.dest(dest));
}

//build frontend
gulp.task('html:build', () =>
  gulp.src(PATH.src.jade)
    .pipe(jade())
    .pipe(gulp.dest(PATH.dest.app.component))
);

gulp.task('html:watch', ['html:build'], () =>
  gulp.watch(PATH.src.jade, (evt) =>
    runSequence('html:build', () => notifyLiveReload([evt.path]))
  )
);

gulp.task('fonts:build', () =>
    gulp.src(PATH.src.fonts)
        .pipe(gulp.dest(PATH.dest.app.fonts))
);

gulp.task('images:build', () =>
    gulp.src(PATH.src.images)
        .pipe(gulp.dest(PATH.dest.app.images))
);

gulp.task('css:build', () =>
    gulp.src(PATH.src.css)
        .pipe(postcss(processors))
        .pipe(gulp.dest(PATH.dest.app.css))
);

gulp.task('css:watch', ['css:build'], () =>
    gulp.watch(PATH.src.css, (evt) =>
        runSequence('css:build', () => notifyLiveReload([evt.path]))
    )
);

gulp.task('jslib:build', () => {
  const jsSrc = gulp.src(DEPS_SRC)
    //.pipe(concat('vendors.js'))
    .pipe(gulp.dest(PATH.dest.app.jslib));
  return jsSrc;
});

gulp.task('jslib:watch', ['jslib:build'], () =>
  gulp.watch(DEPS_SRC, (evt) =>
    runSequence('jslib:build', () => notifyLiveReload([evt.path]))
  )
);

gulp.task('ts:build', () => {
  return compileTs(PATH.src.ts, PATH.dest.app.base);
});

gulp.task('ts:watch', ['ts:build'], () =>
  gulp.watch(PATH.src.ts, (evt) => {
    runSequence('ts:build', () => notifyLiveReload([evt.path]));
  })
);

gulp.task('system:build', () => {
  let builder = new Builder({
    defaultJSExtensions: true,
    paths: {
      'ng2-bootstrap/*': 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min',
      'angular2/*': './node_modules/angular2/*',
      'rxjs/*': './node_modules/rxjs/*'
    }
  });
  builder.bundle('ng2-bootstrap/ng2-bootstrap', join(PATH.dest.app.jslib, 'ng2-bootstrap.js'))
    .then(function () {
      console.log('Build complete');
    })
    .catch(function (err) {
      console.log('Build error');
      console.log(err);
    });
});
gulp.task('system:watch', ['system:build'], () =>
  gulp.watch(DEPS_SRC, (evt) =>
    runSequence('system:build', () => notifyLiveReload([evt.path]))
  )
);

gulp.task('index:build', () => {
  const rDistPath = new RegExp(`^/${PATH.dest.app.base}`);
  const templateLocals = {APP_BASE, APP_VERSION};

  function transformPath(filepath: string): string {
    arguments[0] = filepath.replace(rDistPath, '');
    return inject.transform.apply(inject.transform, arguments);
  }

  function mapPath(dep: any): string {
    return `${dep.dest}/${dep.src.split('/').pop()}`;
  }

  const injectablesDependenciesRef = PATH.src.deps
      .filter(dep => dep['inject'])
      .map(mapPath);

  return gulp.src(PATH.src.index)
    .pipe(inject(gulp.src(injectablesDependenciesRef, {read: false}), {
      transform: transformPath
    }))
    .pipe(template(templateLocals))
    .pipe(gulp.dest(PATH.dest.app.base));
});

gulp.task('index:watch', ['index:build'], () =>
  gulp.watch(PATH.src.index, (evt) =>
    runSequence('index:build', () => notifyLiveReload([evt.path]))
  )
);

//lint
function lintTs(src: string | string[]) {
  return gulp.src(src)
    .pipe(tslint())
    .pipe(tslint.report("verbose"));
}

gulp.task('tslint', () =>
  lintTs(PATH.tslint)
);

//gulp.task('tslint.watch', ['tslint'], () =>
//  gulp.watch(PATH.tslint, (evt) =>
//    runSequence('tslint', () => lintTs(evt.path))
//  )
//);

//tests
function startKarma(singleRun = true) {
  new Server({
    configFile: `${PATH.cwd}/karma.conf.js`,
    singleRun: singleRun
  }).start();
}
gulp.task('tstest:build', () => {
  const src = [`${PATH.src.base}/**/*.ts`, `!${PATH.src.base}/bootstrap.ts`];
  return compileTs(src, PATH.dest.test, true);
});

gulp.task('htmltest:build', () =>
  gulp.src(PATH.src.jade)
    .pipe(jade())
    .pipe(gulp.dest(`${PATH.dest.test}/components`))
);

gulp.task('karma:start', (done: gulp.TaskCallback) => {
  startKarma();
  done();
});

gulp.task('test:watch', ['test:clean'], (done: gulp.TaskCallback) => {
  const src = [`${PATH.src.base}/**/*.ts`, `!${PATH.src.base}/bootstrap.ts`];
  gulp.watch(src, () => runSequence(['htmltest:build', 'tstest:build']));
  runSequence(['htmltest:build', 'tstest:build'], () => startKarma(false));
  done();
});

//TODO add tslint task before test:build
gulp.task('test', ['test:clean'], (done: gulp.TaskCallback) =>
  runSequence(['htmltest:build', 'tstest:build'], 'karma:start', done)
);

//clean
gulp.task('dist:clean', () =>
  del(PATH.dest.app.base)
);

gulp.task('test:clean', () =>
  del(PATH.dest.test)
);

gulp.task('tmp:clean', () =>
  del(PATH.dest.tmp)
);

gulp.task('clean', ['dist:clean', 'test:clean', 'tmp:clean']);

//server start/keep alive
gulp.task('webserver', function () {
  gulp.src(PATH.dest.app.base)
    .pipe(server({
      port: PORT,
      livereload: {
        enable: true,
        port: LIVE_RELOAD_PORT
      },
      directoryListing: false,
      open: true
    }));
});

function notifyLiveReload(changedFiles: string[]) {
  lr.changed({
    body: { files: changedFiles }
  });
}

gulp.task('default', (done: gulp.TaskCallback) =>
  runSequence('build:watch', 'webserver', done)
);
