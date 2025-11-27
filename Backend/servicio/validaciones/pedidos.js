//https://www.npmjs.com/package/joi
//https://github.com/hapijs/joi
//https://joi.dev/
//https://joi.dev/api/?v=17.13.3

import Joi from 'joi'

export const validar = pedido => {

    /* const pedidoSchema = Joi.object({
        ...     // a completar
    })

    const { error } = pedidoSchema.validate(pedido)
    if(error) {
        return { result: false, error }
    } */
    return { result: true }
}