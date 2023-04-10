//--> Importar librerias
import express from "express"
import dotenv from "dotenv"                           // Para crear variables ocultado el string
import conectarDB from "./config/db.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"

//------------------| Funcion principal |------------------
//--> Asignacion de express a variable
const app = express()
//--> Habilitar leer informacion de tipo json
app.use(express.json())

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