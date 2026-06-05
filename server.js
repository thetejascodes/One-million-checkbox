import http from 'node:http'
import path from 'node:path'
import express from 'express'
import dotenv from 'dotenv'
import { initWebsocket } from './src/ws/index.js'
import { redis_client } from './src/redis/redis.js'

dotenv.config()

const CHECKBOXES_SIZE = 100
const CHECKBOXES_KEY = 'checkboxes_state'

const app = express()
const server = http.createServer(app)
const port = process.env.PORT ?? 3000

// Redis se state load karo — source of truth
async function getState() {
  const existing = await redis_client.get(CHECKBOXES_KEY)
  if (existing) return JSON.parse(existing)
  
  // Pehli baar — fresh state banao
  const fresh = new Array(CHECKBOXES_SIZE).fill(false)
  await redis_client.set(CHECKBOXES_KEY, JSON.stringify(fresh))
  return fresh
}

const checkboxes = await getState()
const state = { checkboxes }

initWebsocket(server, state, CHECKBOXES_KEY, CHECKBOXES_SIZE)

app.use(express.static(path.resolve('./public')))

app.get('/health', (req, res) => {
  res.json({ healthy: true })
})

// Redis se live data lo
app.get('/checkboxes', async (req, res) => {
  const data = await redis_client.get(CHECKBOXES_KEY)
  const checkboxes = data ? JSON.parse(data) : []
  return res.json({ checkboxes })
})

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
})