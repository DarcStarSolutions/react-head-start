'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    ['@babel/env',
      {
        // We want Create React App to be IE 9 compatible until React itself
        // no longer works with IE 9
        targets: {
          node: 'current',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        // Adds component stack to warning messages
        // Adds __self attribute to JSX which React will use for some warnings
        development: true,
        // Will use the native built-in instead of trying to polyfill
        // behavior for any plugins that require one.
        useBuiltIns: true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-destructuring'],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        useBuiltIns: true,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
        helpers: true,
        regenerator: true,

      },
    ],
    '@babel/plugin-syntax-dynamic-import',

    'babel-plugin-dynamic-import-node'
  ],
  babelrc: false,
  configFile: false,
});