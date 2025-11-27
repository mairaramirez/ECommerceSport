import axios from "axios";



const produccion = import.meta.env.MODE == 'production'

//const url = 'http://localhost:8080/api/productos/'    // en desarrollo
//const url = '/api/productos/'    // en producción

const url = produccion? '/api/productos/' : 'http://localhost:8080/api/productos/'


//https://refactoring.guru/es/design-patterns/proxy
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy


export const proxyProducto = producto => {
  const handler = {
    get(target, prop) {
      if(prop === 'id') prop = '_id'
      return target[prop]
    }
  }
  
  return new Proxy(producto, handler)
} 

const eliminarPropiedad = (obj, prop) => {
  const objClon = { ...obj }
  delete objClon[prop]
  return objClon
}

const getAll = async () => (await axios.get(url)).data.map(producto => proxyProducto(producto));

const guardar = async prod => proxyProducto((await axios.post(url, prod)).data)

const actualizar = async (id, prod) => proxyProducto((await axios.put(url + id, eliminarPropiedad(prod,'_id'))).data)

const eliminar = async id => proxyProducto((await axios.delete(url + id)).data)


/* ------------------------------------------ */
/*                exportación                 */
/* ------------------------------------------ */
export default {
    getAll,
    guardar,
    actualizar,
    eliminar
}