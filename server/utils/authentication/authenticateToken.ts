import {RequestHandler} from 'express'
import jwt from 'jsonwebtoken'

const authenticateToken: RequestHandler = function (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    res.status(401)
    res.contentType('application/json')
    res.json({
      error: 'Unauthorized request',
    })
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        console.error(err)
        res.status(401)
        res.contentType('application/json')
        res.json({
          error: 'Unauthorized request',
        })
      } else {
        req.user = user as User
        next()
      }
    })
  }
}

export default authenticateToken
