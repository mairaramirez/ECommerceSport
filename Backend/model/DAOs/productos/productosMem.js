
class ModelMem {
    constructor() {
        this.productos = [
            {
                "nombre": "Mancuerna Hexagonal",
                "precio": 15800,
                "stock": 25,
                "marca": "Everlast",
                "categoria": "Pesas",
                "detalles": "Par de mancuernas hexagonales 10kg recubiertas en goma, ideales para entrenamiento funcional.",
                "foto": "https://www.deportesonce.com.ar/wp-content/uploads/FF022-10BK_2Deportes-Once-Follow-Fit.jpg",
                "envio": true,
                "id": "1"
            }, 
           {
                "nombre": "Guantes de Boxeo",
                "precio": 23500,
                "stock": 14,
                "marca": "Everlast",
                "categoria": "Boxeo",
                "detalles": "Guantes profesionales 12 oz con cierre de velcro, aptos para sparring y entrenamiento.",
                "foto": "https://http2.mlstatic.com/D_NQ_NP_693380-MLA71369221679_082023-O.webp",
                "envio": false,
                "id": "2"
            }, 
            {
                "nombre": "Pelota de Futbol",
                "precio": 12700,
                "stock": 40,
                "marca": "Adidas",
                "categoria": "Fútbol",
                "detalles": "Pelota tamaño oficial N°5, cosida a máquina, ideal para entrenamiento y recreación.",
                "foto": "https://production.cdn.vaypol.com/variants/2d1geyp5nm4nsb8qw3rl6i4ao1hd/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4",
                "envio": true,
                "id": "3"
            }   
        ]
    }

    obtenerProductos = async () => this.productos

    obtenerProducto = async id => this.productos.find(p => p.id == id) || {}

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length - 1]?.id || 0) + 1)   // ?. optional chaining + || short circuit operator
        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id
        const index = this.productos.findIndex(p => p.id == id)
        this.productos.splice(index, 1, producto)
        return producto
    }

    borrarProducto = async id => {
        const index = this.productos.findIndex(p => p.id == id)
        const producto = this.productos.splice(index, 1)[0]
        return producto
    }
}

export default ModelMem
