import {ApolloServer, gql} from 'apollo-server-express'
import express from 'express'

import {getUserByPassword} from './db/controllers/User'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
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

// app.use(authenticateToken)

app.get('/', (req, res) => {
  res.send('Hello, world from server!')
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({app})

app.listen({port: 4000}, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
