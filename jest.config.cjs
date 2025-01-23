/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Mock CSS imports (both regular CSS and CSS modules)
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '\\.(css|sass|scss)$': '<rootDir>/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
