// common project configuration used by the other configs

const path = require('path')

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const commonConfig = {
  rootDir: path.join(__dirname, '..'),
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  clearMocks: true,
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
    '@shared': '<rootDir>/shared/',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-select-projects',
  ],
}

module.exports = commonConfig
