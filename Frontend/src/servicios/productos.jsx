import axios from "axios"

const produccion = import.meta.env.MODE == 'production'
const url = produccion? '/api/productos/' : 'http://localhost:8080/api/productos/'


export const proxyProducto = producto => {
  const handler = {
    get(target, prop) {
      if (prop === 'id') {
        return target._id ?? target.id
      }
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

//const actualizar = async (id, prod) => {const prodClon = { ...prod } delete prodClon._id return proxyProducto((await axios.put(url + id, prodClon)).data)}

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