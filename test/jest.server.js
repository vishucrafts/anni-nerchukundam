// common project configuration used by the other configs
const commonConfig = require('./jest-common')

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const serverConfig = {
  ...commonConfig,
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/server/**/__tests__/**/*.[jt]s'],
  testPathIgnorePatterns: ['<rootDir>/server/dist/'],
}

module.exports = serverConfig
