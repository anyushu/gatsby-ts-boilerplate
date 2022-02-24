module.exports = {
  // Run typecheck on changes to TypeScript files
  './src/**/*.ts?(x)': () => 'yarn typecheck',
  // Run ESLint on changes to JavaScript/TypeScript files
  './src/**/*.(ts|js)?(x)': (filenames) => `yarn lint . ${filenames.join(' ')}`,
}
