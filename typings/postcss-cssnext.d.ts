// Type definitions for postcss-cssnext
// Project: https://github.com/jonathanepollack/gulp-minify-css
// Definitions by: Hubert Gudan <https://github.com/NN77>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "postcss-cssnext" {

    interface IOptions {
        browsers?: string[];
		compress?: boolean;
    }

    function postCSSnext(options?: IOptions): NodeJS.ReadWriteStream;

    namespace postCSSnext {}

    export = postCSSnext;
}
