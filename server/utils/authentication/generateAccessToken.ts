import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import path from 'path'

dotenv.config({path: path.join(process.cwd(), 'server/.env')})

function generateAccessToken(user: User) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

export {generateAccessToken}
