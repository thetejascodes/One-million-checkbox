import { Server } from 'socket.io'

export function initWebsocket(server,state) {
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`)

    socket.on('client:checkbox:changed', (data) => {
      console.log(`[Socket:${socket.id}] client:checkbox:changed`, data)
      state.checkboxes[data.index] = data.checked;
            io.emit('server:checkbox:changed', data)
    })
  })

  return io
}
