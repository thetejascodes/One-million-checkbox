import http from 'node:http'
import path from 'node:path'
import express from 'express'
import dotenv from 'dotenv'
import { initWebsocket } from './src/ws/index.js'
dotenv.config()

const checkboxes_size = 1000000

const state = {
    checkboxes: new Array(checkboxes_size).fill(false)
}
const app = express()
const server = http.createServer(app)
const port = process.env.PORT ?? 3000

initWebsocket(server,state)

app.use(express.static(path.resolve('./public')))
app.get('/health', (req, res) => {
  res.json({ healthy: true })
})
app.get('/checkboxes', (req, res) => {
    return res.json({checkboxes: state.checkboxes})
})

server.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
})
