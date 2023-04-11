import express from "express"
import { autenticar, crearUsuario } from "../controllers/usuarioController.js"

const usuarioRoutes = express.Router()

//----------------------------| Autenticacion, registro y confirmacion de usuarios |----------------------------
usuarioRoutes.post("/", crearUsuario)
usuarioRoutes.post("/login", autenticar)

// usuarioRoutes.get(
//   "/confirmar",                       // Recibe la url donde fue llamado y añade '/confirmar'
//   (req, res) => {
//     res.send("Desde confirmar")
//   }
// )

// usuarioRoutes.post(
//   "/",                                // Recibe la url donde fue llamado
//   (req, res) => {
//     res.send("Desde post usuarioRoutes")
//   }
// )

export default usuarioRoutes