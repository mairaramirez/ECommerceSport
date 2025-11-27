import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''
    constructor() {
        this.#nombreArchivo = 'pedidos.json'
    }

    // --------- Métodos privados para acceder al sistema de archivos y guardar los pedidos -------
    #leerArchivo = async () => {
        let pedidos = []
        try {
            pedidos = JSON.parse(await fs.promises.readFile(this.#nombreArchivo, 'utf-8'))
        }
        catch {}

        return pedidos
    }

    #escribirArchivo = async pedidos => {
        await fs.promises.writeFile(this.#nombreArchivo, JSON.stringify(pedidos, null, '\t'))
    }
    // ---------------------------------------------------------------------------------------

    obtenerPedidos = async () => {
        const pedidos = await this.#leerArchivo()
        return pedidos
    }

    guardarPedido = async pedido => {
        const pedidos = await this.#leerArchivo()
        pedido.id = String(parseInt(pedidos[pedidos.length-1]?.id || 0) + 1)   // ?. optional chaining + || short circuit operator
        pedidos.push(pedido)
        await this.#escribirArchivo(pedidos)
        
        return pedido
    }
}

export default ModelFile
