module.exports = {
  moduleNameMapper: {
    '\\.(pcss)$': '<rootDir>/__mocks__/styleMock.js',
    '^actions(.*)$': '<rootDir>/src/store/actions$1',
  },
}
