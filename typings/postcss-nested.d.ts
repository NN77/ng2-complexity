declare module 'postcss-nested' {
  function nested(): NodeJS.ReadWriteStream;
  module nested { }
  export = nested;
}