module.exports = {
  rootDir: '../../',
  setupTestFrameworkScriptFile: './test/unit-test/jest.unit-test.init.js',
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
    /*'^.+\\.css$': 'config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': 'config/jest/fileTransform.js'
*/
  },

};