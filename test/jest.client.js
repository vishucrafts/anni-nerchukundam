const commonConfig = require('./jest-common')

/** @typedef {import('ts-jest/dist/types')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const clientConfig = {
  ...commonConfig,
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/client/**/__tests__/**/*.[jt]s(x)?'],
  snapshotSerializers: ['@emotion/jest/serializer'],
}

module.exports = clientConfig
