import CnxMongoDB from "../DBMongo.js"

class ModelMongoDB {
    constructor() {}

    obtenerUsuarios = async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')

        const usuarios = await CnxMongoDB.db.collection('usuarios').find({}).toArray()
        return usuarios
    }

    guardarUsuario = async usuario => {
        if(!CnxMongoDB.connectionOK) throw new Error('DAO sin conexión a MongoDB')

        await CnxMongoDB.db.collection('usuarios').insertOne(usuario)
        return usuario
    }
}

export default ModelMongoDB
