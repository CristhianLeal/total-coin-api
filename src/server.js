import express from 'express'
import { buttonRoutes } from './routes/index.js'
import cors from 'cors'

export class Server {

  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes() {
    this.app.use('/',buttonRoutes)
  }


  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
    })
  }

}