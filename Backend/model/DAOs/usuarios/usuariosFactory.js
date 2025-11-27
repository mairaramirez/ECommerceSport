import ModelFile from "./usuariosFile.js"
import ModelMem from "./usuariosMem.js"
import ModelMongoDB from "./usuariosMongoDB.js"

class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria (usuarios) ***')
                return new ModelMem
            
            case 'FILE':
                console.log('*** Persistiendo en File System (usuarios) ***')
                return new ModelFile()

            case 'MONGODB':
                console.log('*** Persistiendo en base de datos MongoDB (usuarios) ***')
                return new ModelMongoDB()

            default:
                console.log('*** Persistiendo en Memoria (default) (usuarios) ***')
                return new ModelMem
        }
    }
}

export default ModelFactory