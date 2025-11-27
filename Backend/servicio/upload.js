class Servicio {
    constructor() {}

    recibirArchivo = async file => {
        const urlFoto = '/uploads/' + file.filename
        return urlFoto
    }
}

export default Servicio