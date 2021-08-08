module.exports = {
  // Type check TypeScript files
  'src/**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint and format TypeScript and JS files
  'src/**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  'src/**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
};
