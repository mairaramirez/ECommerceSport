import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''
    constructor() {
        this.#nombreArchivo = 'usuarios.json'
    }

    // --------- Métodos privados para acceder al sistema de archivos y guardar los usuarios -------
    #leerArchivo = async () => {
        let usuarios = []
        try {
            usuarios = JSON.parse(await fs.promises.readFile(this.#nombreArchivo, 'utf-8'))
        }
        catch {}

        return usuarios
    }

    #escribirArchivo = async usuarios => {
        await fs.promises.writeFile(this.#nombreArchivo, JSON.stringify(usuarios, null, '\t'))
    }
    // ---------------------------------------------------------------------------------------

    obtenerUsuarios = async () => {
        const usuarios = await this.#leerArchivo()
        return usuarios
    }

    guardarUsuario = async usuario => {
        const usuarios = await this.#leerArchivo()
        usuario.id = String(parseInt(usuarios[usuarios.length-1]?.id || 0) + 1)   // ?. optional chaining + || short circuit operator
        usuarios.push(usuario)
        await this.#escribirArchivo(usuarios)
        
        return usuario
    }
}

export default ModelFile
