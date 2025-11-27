
import config from '../config.js'
import ModelFactory from '../model/DAOs/pedidos/pedidosFactory.js'
import { validar } from './validaciones/pedidos.js'

import { preference } from './pago.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerPedidos = async () => {
        const pedidos = await this.model.obtenerPedidos()
        return pedidos
    }

    guardarPedido = async pedido => {
        // validación específica
        const res = validar(pedido)
        if(res.result) {
            const pedidoGuardado = await this.model.guardarPedido(pedido)
            return pedidoGuardado
        }
        else {
            throw new Error(res.error.details[0].message)
        }
    }
    
    createPreference = async datos => {
        try {
            const preferences = await preference.create(datos.prefItems)
            const preferenceId = preferences.id
            return preferenceId
        }
        catch(error) {
            console.log(`Error en createPreference: ${error.message}`)
        }
    }
}

export default Servicio