declare module 'gulp-postcss' {
  function postcss(any): NodeJS.ReadWriteStream;
  module postcss { }
  export = postcss;
}