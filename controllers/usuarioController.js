import Usuario from "../models/Usuario.js"

export const crearUsuario = async (req, res) => {
  //--> Evitar registros duplicados
  const { email } = req.body
  //--> Busca el email en la tabla
  const existeUsuario = await Usuario.findOne({ email })

  if (existeUsuario) {
    const error = new Error("Usuario ya registrado")
    return res.status(400).json({ msg: error.message })
  }

  //--> Crea registro y lo guardar
  try {
    //--> Crea un usuario apartir de lo que recibio
    const usuario = new Usuario(req.body)
    //--> Guardar registro en DB
    const usuarioAlmacenado = await usuario.save()
    //--> Muestra el usuario que se creo
    res.json(usuarioAlmacenado)

  } catch (error) {
    console.log(error)
  }

}
