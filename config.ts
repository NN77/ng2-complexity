import * as fs from 'fs';
import * as argv from 'yargs';

const CWD = process.cwd();
const p4ckage = JSON.parse(fs.readFileSync(`${CWD}/package.json`, 'utf8'));

export const APP_BASE: string = argv['base'] || '/';
export const APP_VERSION: string = p4ckage.version;
export const PORT: number = argv['port'] || 7070;
export const LIVE_RELOAD_PORT = argv['reload-port'] || 9999;

const FRONT_SRC = 'src';
const FRONT_DEST = 'dist';
export const JS_DEST = `${FRONT_DEST}/jslib`;
export const CSS_DEST = `${FRONT_DEST}/css`;

export const PATH = {
  cwd: CWD,
  src: {
    base: FRONT_SRC,
    deps: [
      //CSS
      {src: 'node_modules/bootstrap/dist/css/bootstrap.min.css', dest: JS_DEST, inject: true},
      {src: `${FRONT_DEST}/css/style.css`, dest: CSS_DEST, inject: true},
      //JS
      {src: 'node_modules/es6-shim/es6-shim.min.js', dest: JS_DEST, inject: true},
      //{src: 'node_modules/systemjs/dist/system-polyfills.js', dest: JS_DEST},
      {src: 'node_modules/systemjs/dist/system.src.js', dest: JS_DEST, inject: true},
      {src: `${FRONT_SRC}/system.config.js`, dest: JS_DEST, inject: true},
      {src: 'node_modules/rxjs/bundles/Rx.js', dest: JS_DEST, inject: true},
      {src: 'node_modules/angular2/bundles/angular2-polyfills.js', dest: JS_DEST, inject: true},
      {src: 'node_modules/angular2/bundles/angular2.js', dest: JS_DEST, inject: true},
      {src: 'node_modules/angular2/bundles/router.js', dest: JS_DEST, inject: true},
      {src: 'node_modules/angular2/bundles/http.js', dest: JS_DEST, inject: true},
      {src: 'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.js', dest: JS_DEST, inject: true}
    ],
    index: `${FRONT_SRC}/views/index.html`,
    jade: `${FRONT_SRC}/components/**/*.jade`,
    html: `${FRONT_SRC}/components/**/*.html`,
    fonts: [
      `${FRONT_SRC}/css/fonts/*`
    ],
    images: [
      `${FRONT_SRC}/css/images/**/*`
    ],
    css: [
      `${FRONT_SRC}/css/style.css`
    ],
    ts: [
      `${FRONT_SRC}/**/*.ts`,
      `!${FRONT_SRC}/**/*_spec.ts`
    ]
  },
  dest: {
    app: {
      base: FRONT_DEST,
      jslib: `${FRONT_DEST}/jslib`,
      fonts: `${FRONT_DEST}/css/fonts`,
      images: `${FRONT_DEST}/css/images`,
      css: `${FRONT_DEST}/css`,
      component: `${FRONT_DEST}/components`
    },
    test: 'test',
    tmp: '.tmp'
  },
  tslint: [
    `${CWD}/src/**/*.ts`,
    `${CWD}/config.ts`,
    `${CWD}/gulpfile.ts`
  ],
};

export const DEPS_SRC = PATH.src.deps.map(it => it.src);
