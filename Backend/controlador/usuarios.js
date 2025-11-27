import Servicio from '../servicio/usuarios.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

   

    loginUsuario = async (req,res) => {
        try {
            const credenciales = req.body

            // validación genérica
            if(!Object.keys(credenciales).length) throw new Error('El pedido está vacío')

            const usuarioLogeado = await this.servicio.guardarPedido(credenciales)
            res.json(usuarioLogeado)
        }
        catch(error) {
            res.status(500).json({ errMsg: error.message })
        }
    }

    createUsuario = async (req,res) => {
        try {
            const credenciales = req.body

            // validación genérica
            if(!Object.keys(credenciales).length) throw new Error('El pedido está vacío')

            const usuarioLogeado = await this.servicio.guardarPedido(credenciales)
            res.json(usuarioLogeado)
        }
        catch(error) {
            res.status(500).json({ errMsg: error.message })
        }
    }

    registerUsuario = async (req,res) => {
        try {
            const credenciales = req.body

            // validación genérica
            if(!Object.keys(credenciales).length) throw new Error('El pedido está vacío')

            const usuarioLogeado = await this.servicio.registerUsuario(credenciales)
            res.json(usuarioLogeado)
        }
        catch(error) {
            res.status(500).json({ errMsg: error.message })
        }
    }
}

export default Controlador