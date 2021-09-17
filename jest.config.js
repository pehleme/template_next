module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
  coverageReporters: ['lcov', 'text', 'cobertura'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputFile: 'coverage/junit.xml',
      },
    ],
  ],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
};
