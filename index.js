//--> Importar librerias
import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"

//--> Asignacion de express a variable
const app = express()

//--> Buscara el archivo .env
dotenv.config()

//--> Conexion
conectarDB()

//--> Uso de routing
app.use("/api/usuarios", usuarioRoutes)

//--> Variable para el puerto, revisa si existe sino asigna puerto 4000
const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`[+]Servidor conectado en el puerto: ${PORT}`)
})