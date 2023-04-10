import mongoose from "mongoose";

//--> Definir estructura de usuario
//--> Va a interactuar con la DB
//--> Creara una tabla con las columnas
const usuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    token: {
      type: String
    },
    confirmado: {
      type: Boolean,
      default: false
    }
  }, {
  //--> 2 columnas; creado y actualizado
  timestamps: true,
}
)

//--> Crear modelo usuario / tabla usuario
const Usuario = mongoose.model("Usuario", usuarioSchema)

//--> Exportar modelo creado
export default Usuario