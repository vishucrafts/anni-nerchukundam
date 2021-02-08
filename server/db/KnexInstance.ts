import Knex from 'knex'

import KnexConfig from '../knex/knexfile'

const env = process.env.NODE_ENV || 'development'

const envConfig = KnexConfig[env]
const knex = Knex(envConfig)

export default knex
