module.exports = {
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-localstorage-mock',
  ],
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
};
