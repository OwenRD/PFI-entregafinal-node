import express from "express"
import cors from "cors"
import routesLog from "./src/routes/auth.routes.js"
import routesProducts from "./src/routes/products.routes.js"
import { authentication } from "./src/midleware/authentication.js"

const app = express()
const PORT = process.env.PORT || 3000

const corsConfig = {

    origin: ['http://localhost:3000', 'https://midominio.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204

}

app.use(cors(corsConfig))
app.use(express.json())

app.use("/api", routesLog)

app.use((req, res, next) => {
    console.log(`Datos received at: ${req.method}`)
    next()
})

app.use("/api", routesProducts)

app.use((req, res, next) => {
    res.status(404).send("Recurso NO encontrado o Ruta invalida.")
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
})