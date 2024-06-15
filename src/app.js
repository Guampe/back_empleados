import express from "express"
import config from "./config.js"

import empleadosRoutes from "./routes/empleados.routes.js"

const app = express()

app.set("port", config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(empleadosRoutes)

export default app