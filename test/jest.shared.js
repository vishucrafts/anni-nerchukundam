// common project configuration used by the other configs
const commonConfig = require('./jest-common')

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const serverConfig = {
  ...commonConfig,
  displayName: 'shared',
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/shared/**/__tests__/**/*.[jt]s'],
}

module.exports = serverConfig
