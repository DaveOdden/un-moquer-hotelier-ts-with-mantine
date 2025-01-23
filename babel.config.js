module.exports = {
  presets: [
    '@babel/preset-env', // Transpiles modern JavaScript to compatible versions
    '@babel/preset-react', // Enables React JSX transpilation
    '@babel/preset-typescript', // Supports TypeScript
  ],
  plugins: ["babel-plugin-transform-import-meta"],
  ignore: [
    '**/*.css', // Tells Babel to ignore CSS files during processing
  ],
}