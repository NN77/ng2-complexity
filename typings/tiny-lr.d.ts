declare module 'tiny-lr' {
  function tinylr(): TinyLr;
  module tinylr {}
  export = tinylr;

  interface TinyLr {
    changed(options: any): void;
    listen(port: number): void;
    refresh(files?: string[]): void;
  }
}
