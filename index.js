//--> Importar librerias
import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js"

//--> Asignacion de express a variable
const app = express()

//--> Buscara el archivo .env
dotenv.config()

//--> Conexion
conectarDB()

//--> Variable para el puerto, revisa si existe sino asigna puerto 4000
const PORT = process.env.PORT || 40000

app.listen(PORT, () => {
  console.log(`[+]Servidor conectado en el puerto: ${PORT}`)
})