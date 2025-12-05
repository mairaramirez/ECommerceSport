class Servicio {
    constructor() {}

     recibirArchivo = async file => {
        const baseUrl = process.env.BASE || 'http://localhost:8080'
        const urlFoto = `${baseUrl}/uploads/${file.filename}`
        return urlFoto
    } 
    
}

export default Servicio