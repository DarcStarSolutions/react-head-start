module.exports = {
  rootDir: '../../../',
  setupTestFrameworkScriptFile: '<rootDir>/test/config/jest/jest.unit-test.init.js',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns:[
    '/config/', //skip the test.js config file
    '/node_modules/'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/test/config/jest/babelTransform.js',
    /*'^.+\\.css$': '<rootDir>/test/config/jest/cssTransform.js', */
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/test/config/jest/fileTransform.js'

  },

};