import { Server } from 'socket.io'
import { publisher, subscriber, redis_client } from '../redis/redis.js'

export async function initWebsocket(server, CHECKBOXES_KEY, CHECKBOXES_SIZE) {
  const io = new Server(server)

  await subscriber.subscribe('internal-server:checkbox:changed')

  subscriber.on('message', (channel, message) => {
    if (channel === 'internal-server:checkbox:changed') {
      const { index, checked } = JSON.parse(message)
      io.emit('server:checkbox:changed', { index, checked })
    }
  })

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`)

    socket.on('client:checkbox:changed', async ({ index, checked }) => {
      if (checked) {
        await redis_client.hset(CHECKBOXES_KEY, index, '1')
      } else {
        await redis_client.hdel(CHECKBOXES_KEY, index)
      }

      await publisher.publish(
        'internal-server:checkbox:changed',
        JSON.stringify({ index, checked })
      )
    })
  })

  return io
}