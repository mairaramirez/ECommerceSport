
class ModelMem {
    constructor() {
        this.pedidos = [{
            id: "1",
            fyh: "30/9/2025, 09:00:52",
            pedido: [
                {
                    nombre: "Mouse",
                    precio: 234,
                    stock: 77,
                    marca: "Genius",
                    categoria: "PC",
                    detalles: "Negro",
                    foto: "https://http2.mlstatic.com/D_NQ_NP_857225-MLA91873722247_092025-O.webp",
                    envio: true,
                    id: "13",
                    cantidad: 1
                },
                {
                    nombre: "CPU",
                    precio: 12345,
                    stock: 77,
                    marca: "Intel",
                    categoria: "PC",
                    detalles: "I7",
                    foto: "https://http2.mlstatic.com/D_NQ_NP_978797-MLA91558336920_092025-O.webp",
                    envio: true,
                    id: "12",
                    cantidad: 2
                },
                {
                    nombre: "Mesa",
                    precio: 123,
                    stock: 55,
                    marca: "Pinolandia",
                    categoria: "Mueble",
                    detalles: "Laqueada",
                    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjmxFHUlN6Pw-66BekMmZezDC26bo2zANIw&s",
                    envio: true,
                    id: "11",
                    cantidad: 1
                }
            ]
        }]
    }

    obtenerPedidos = async () => this.pedidos

    guardarPedido = async pedido => {
        pedido.id = String(parseInt(this.pedidos[this.pedidos.length - 1]?.id || 0) + 1)   // ?. optional chaining + || short circuit operator
        this.pedidos.push(pedido)
        return pedido
    }
}

export default ModelMem
