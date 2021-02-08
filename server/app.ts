import express from 'express'
import jwt from 'jsonwebtoken'

import {getUserByPassword} from './db/controllers/User'
import authenticateToken from './utils/authentication/authenticateToken'
import {generateAccessToken} from './utils/authentication/generateAccessToken'

const app = express()
const port = 4000

app.use(express.json())

app.post('/login', async (req, res) => {
  const {username, password} = req.body
  const user: User = {username, password}
  console.log(user)

  const id = await getUserByPassword(user)

  if (id === 0) {
    res.status(401)
    res.contentType('application/json')
    res.json({
      error: 'Unauthorized request',
    })
  } else {
    const accessToken = generateAccessToken(user)
    res.status(200)
    res.contentType('application/json')
    res.json({
      accessToken,
    })
  }
})

app.use(authenticateToken)

app.get('/', (req, res) => {
  res.send('Hello, world from server!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
