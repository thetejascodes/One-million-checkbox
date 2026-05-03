import http from 'node:http'
import path from 'node:path'
import express from 'express'
import {Server} from 'socket.io'
import dotenv from 'dotenv'
import { Socket } from 'node:dgram'
dotenv.config()
async function startServer() {
    const app = express()
    const server = http.createServer(app)
    const port = process.env.PORT 
    const io = new Server();
    io.attach(server)
     
    io.on('connection',(socket)=>{
        console.log(`Client connected: ${socket.id}`)
        socket.on('client:checkbox:changed',(data)=>{
            console.log(`[Socket:${socket.id}] :client:checkbox:changed`,data)
            io.emit('server:checkbox:changed',data) 
        })
    })
    app.use(express.static(path.resolve('./public')))
    app.get('/health',(req,res)=>{res.json({healthy:true})})

    server.listen(port,()=>{
        console.log(`🚀 Server is running on http://localhost:${port}`)
    })
}
startServer()