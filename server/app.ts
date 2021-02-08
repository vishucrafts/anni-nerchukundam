import express from 'express'
import jwt from 'jsonwebtoken'

import {getUser} from './utils/authenticate-user'

const app = express()
const port = 4000

app.use(express.json())

app.post('/login', async (req, res) => {
  // const username = req.body.username
  // const password = req.body.password

  const {username, password} = req.body
  const user: User = {username, password}

  // getUser(user).then(id => {
  //   if (id === 0) {
  //     res.status(401)
  //     res.contentType('application/json')
  //     res.end(
  //       JSON.stringify({
  //         error: 'Unauthorized Request',
  //       }),
  //     )
  //   } else {
  //     res.status(200)
  //     res.contentType('application/json')
  //     res.end({
  //       id,
  //     })
  //   }
  // })

  const id = await getUser(user)

  if (id === 0) {
    res.status(401)
    res.contentType('application/json')
    res.end(
      JSON.stringify({
        error: 'Unauthorized Request',
      }),
    )
  } else {
    res.status(200)
    res.contentType('application/json')
    res.end({
      id,
    })
  }
})

app.get('/', (req, res) => {
  res.send('Hello, world from server!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
