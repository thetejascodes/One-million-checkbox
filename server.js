import http from 'node:http'
import path from 'node:path'
import express from 'express'
import dotenv from 'dotenv'
import { initWebsocket } from './src/ws/index.js'
import { redis_client } from './src/redis/redis.js'

dotenv.config()

const CHECKBOXES_SIZE = 1000000
const CHECKBOXES_KEY = 'checkboxes'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT ?? 3000

initWebsocket(server, CHECKBOXES_KEY, CHECKBOXES_SIZE)

app.use(express.static(path.resolve('./public')))

app.get('/health', (req, res) => {
  res.json({ healthy: true })
})

app.get('/checkboxes', async (req, res) => {
  const data = await redis_client.hgetall(CHECKBOXES_KEY)
  return res.json({ checked: data || {} })
})

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
})