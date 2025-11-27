
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';

import config from '../config.js'


// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: config.MP_ACCESS_TOKEN });

export const preference = new Preference(client);


/* preference.create({
  body: {
    items: [
      {
        title: 'CPU',
        quantity: 2,
        unit_price: 3500
      },
      {
        title: 'DDR',
        quantity: 4,
        unit_price: 500
      }
    ],
    back_urls: {
        success: "https://localhost:5173/#/carrito",
        failure: "https://localhost:5173/#/carrito",
        pending: "https://localhost:5173/#/carrito"
    },
    auto_return: "approved",    
  }
})
.then(preference => {
    const { id, init_point } = preference
})
.catch(error => {
}); */