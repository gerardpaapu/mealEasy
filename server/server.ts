import express from 'express'
import * as Path from 'node:path'

import users from './routes/users'
import recipes from './routes/recipes'
import weeks from './routes/weeks'
import preferences from './routes/preferences'

const server = express()

server.use(express.json())

server.use('/api/v1/users', users)
server.use('/api/v1/recipes', recipes)
server.use('/api/v1/weeks', weeks)
server.use('/api/v1/preferences', preferences)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
