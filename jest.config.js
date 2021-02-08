const commonConfig = require('./test/jest-common')

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  ...commonConfig,
  projects: [
    './test/jest.shared.js',
    './test/jest.server.js',
    './test/jest.client.js',
  ],
}

module.exports = config
