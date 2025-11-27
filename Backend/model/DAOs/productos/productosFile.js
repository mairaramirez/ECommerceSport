import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''
    constructor() {
        this.#nombreArchivo = 'productos.json'
    }

    // --------- Métodos privados para acceder al sistema de archivos y guardar los productos -------
    #leerArchivo = async () => {
        let productos = []
        try {
            productos = JSON.parse(await fs.promises.readFile(this.#nombreArchivo, 'utf-8'))
        }
        catch {}

        return productos
    }

    #escribirArchivo = async productos => {
        await fs.promises.writeFile(this.#nombreArchivo, JSON.stringify(productos, null, '\t'))
    }
    // ---------------------------------------------------------------------------------------

    obtenerProductos = async () => {
        const productos = await this.#leerArchivo()
        return productos
    }

    obtenerProducto = async id => {
        const productos = await this.#leerArchivo()
        const producto = productos.find(p => p.id == id) || {}
        return producto
    }

    guardarProducto = async producto => {
        const productos = await this.#leerArchivo()
        producto.id = String(parseInt(productos[productos.length-1]?.id || 0) + 1)   // ?. optional chaining + || short circuit operator
        productos.push(producto)
        await this.#escribirArchivo(productos)
        
        return producto
    }

    actualizarProducto = async (id,producto) => {
        const productos = await this.#leerArchivo()
        producto.id = id
        const index = productos.findIndex(p => p.id == id)
        productos.splice(index, 1, producto)
        await this.#escribirArchivo(productos)

        return producto
    }

    borrarProducto = async id => {
        const productos = await this.#leerArchivo()
        const index = productos.findIndex(p => p.id == id)
        const producto = productos.splice(index, 1)[0]
        await this.#escribirArchivo(productos)

        return producto    
    }
}

export default ModelFile
