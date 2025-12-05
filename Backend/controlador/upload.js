import Servicio from '../servicio/upload.js'

class Controlador {
    constructor() {
        this.servicio = new Servicio()
    }

    recibirArchivo = async (req,res) => {
        try {
            const file = req.file
            const urlFoto = await this.servicio.recibirArchivo(file)
            res.json({urlFoto}) 
        }
        catch(error) {
            res.status(500).json({ errMsg: error.message })
        }
    }
}

export default Controlador