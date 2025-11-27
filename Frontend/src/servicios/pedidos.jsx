import axios from "axios"

const produccion = import.meta.env.MODE == 'production'

//const url = 'http://localhost:8080/api/pedidos/'      // en desarrollo
//const url = '/api/pedidos/'                             // en producción

const url = produccion? '/api/pedidos/' : 'https://localhost:8080/api/pedidos/' 

const enviar = async pedido => (await axios.post(url, pedido)).data


const getPreferenceId = async carrito => {

    const prefItems = {
        body: {
            items: carrito.map(p => ({
                title: p.nombre,
                quantity: p.cantidad,
                unit_price: p.precio
            })),
            /* items: [
                {
                    title: 'CPU',
                    quantity: 3,
                    unit_price: 700
                },
                {
                    title: 'DDR',
                    quantity: 2,
                    unit_price: 500
                }
            ], */
            back_urls: {
                success: "https://localhost:5173/#/carrito",
                failure: "https://localhost:5173/#/carrito",
                pending: "https://localhost:5173/#/carrito"
            },
            auto_return: "approved",    
        }
    }

    const datos = { prefItems }

    try {
        const { data:preferenceId} = await axios.post(url + 'mp/create_preference', datos)
        return preferenceId
    }
    catch(error) {
        console.error('ERROR getPreferenceId:', error.message)
        throw error
    }
}

/* ------------------------------------------ */
/*                exportación                 */
/* ------------------------------------------ */
export default {
    enviar,
    getPreferenceId
}