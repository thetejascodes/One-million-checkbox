import { Server } from 'socket.io'
import { publisher, subscriber, redis_client } from '../redis/redis.js'

export async function initWebsocket(server, state, CHECKBOXES_KEY, CHECKBOXES_SIZE) {
  const io = new Server(server)

  await subscriber.subscribe('internal-server:checkbox:changed')

  subscriber.on('message', (channel, message) => {
    if (channel === 'internal-server:checkbox:changed') {
      const { index, checked } = JSON.parse(message)
      // Memory sync karo
      state.checkboxes[index] = checked
      io.emit('server:checkbox:changed', { index, checked })
    }
  })

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`)

    socket.on('client:checkbox:changed', async (data) => {
      const { index, checked } = data

      // Redis se latest state lo
      const existing = await redis_client.get(CHECKBOXES_KEY)
      const checkboxes = existing
        ? JSON.parse(existing)
        : new Array(CHECKBOXES_SIZE).fill(false)

      // Update karo
      checkboxes[index] = checked

      // Redis mein save karo — source of truth
      await redis_client.set(CHECKBOXES_KEY, JSON.stringify(checkboxes))

      // Sabko broadcast karo
      await publisher.publish(
        'internal-server:checkbox:changed',
        JSON.stringify({ index, checked })
      )
    })
  })

  return io
}