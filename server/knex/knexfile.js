// Update with your config settings.
const path = require('path')

module.exports = {
  /**
   * @type {import('knex').Config}
   */
  development: {
    client: 'postgresql',
    connection: {
      host: 'anni-nerchukundam-db',
      database: 'docker',
      user: 'docker',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, 'migrations'),
      stub: path.join(__dirname, 'migration.stub.js'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
      stub: path.join(__dirname, 'seed.stub.js'),
    },
  },

  /**
   * @type {import('knex').Config}
   */
  production: {
    client: 'postgresql',
    connection: {
      host: 'anni-nerchukundam-db',
      database: 'docker',
      user: 'docker',
      password: 'docker',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, 'migrations'),
      stub: path.join(__dirname, 'migration.stub.js'),
    },
    seeds: {
      directory: path.join(__dirname, 'seeds'),
      stub: path.join(__dirname, 'seed.stub.js'),
    },
  },
}
