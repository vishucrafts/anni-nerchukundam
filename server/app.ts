import express from 'express'
import jwt from 'jsonwebtoken'
import Knex from 'knex'

import KnexConfig from './knex/knexfile'

const env = process.env.NODE_ENV || 'development'

const envConfig = KnexConfig[env]
const knex = Knex(envConfig)

const app = express()
const port = 4000

app.use(express.json())

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  res.end(`I got username: ${username} and password: ${password}`)
})

app.get('/', (req, res) => {
  res.send('Hello, world from server!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
