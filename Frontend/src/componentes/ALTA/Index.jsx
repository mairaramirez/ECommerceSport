import { useEffect, useState } from 'react'

import './Index.css'

import servicioProductos from '../../servicios/productos'
import { ObtenerFoto } from './ObtenerFoto'


export function Index() {
    const prodClear = {
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        detalles: '',
        foto: '',
        envio: false,
    }

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState(prodClear)
    const [productoDirty, setProductoDirty] = useState(prodClear)
    const [editarID, setEditarID] = useState(null)
    const [resetFoto, setResetFoto] = useState(false)

    useEffect(() => {
        (async () => {
            const productos = await servicioProductos.getAll()

            setProductos(productos)
        })()

        return () => {
            console.warn('Componente alta (desmontado)')
        }
    }, [])


    async function agregar(e) {
        e.preventDefault()

        if (editarID) {
            const productoActualizado = await servicioProductos.actualizar(editarID, producto)

            const productosClon = [...productos]
            const index = productosClon.findIndex(p => p.id == productoActualizado.id)
            productosClon.splice(index, 1, productoActualizado)
            setProductos(productosClon)

            setEditarID(null)
        }
        else {
            const productoGuardado = await servicioProductos.guardar(producto)

            const productosClon = [...productos]
            productosClon.push(productoGuardado)
            setProductos(productosClon)
            setResetFoto(true)
        }

        setProducto(prodClear)
        setProductoDirty(prodClear)
    }

    async function borrar(id) {

        if (confirm(`¿Está seguro de borrar el producto de id ${id}?`)) {
            const productoEliminado = await servicioProductos.eliminar(id)

            const productosClon = [...productos]
            const index = productosClon.findIndex(p => p.id == productoEliminado.id)
            productosClon.splice(index, 1)
            setProductos(productosClon)
        }
    }

    function cancelar(id) {

        setEditarID(null)
        setProducto(prodClear)
    }

    function editar(id) {

        setEditarID(id)

        const producto = productos.find(p => p.id == id)
        setProducto(producto)
    }

    const nombreNoValido = () => !/^[a-zA-ZÁÉÍÓÚÑ]{3,50}( [a-zA-ZÁÉÍÓÚÑ]{1,50})*$/i.test(producto.nombre.trim())

    const precioNoValido = () => {
        const precio = String(producto.precio).trim()
        if (!/^(\d{1,6})([.,]\d{1,2})?$/.test(precio)) return true
        return parseFloat(precio.replace(',', '.')) <= 0
    }

    const marcaNoValido = () => !/^[a-záéíóúñ0-9 .'\-]{2,40}$/i.test(producto.marca)
    const stockNoValido = () => !/^(0|[1-9]\d{0,2})$/.test(producto.stock)
    const detallesNoValido = () => {
        const detalle = (producto.detalles)
        return detalle.length < 10 || detalle.length > 999
    }
    const fotoNoValido = () => producto.foto.trim() === ''
    const categoriaNoValido = () => producto.categoria.trim() === ''




    function formularioNoValido() {
        return (
            nombreNoValido() ||
            precioNoValido() ||
            stockNoValido() ||
            marcaNoValido() ||
            categoriaNoValido() ||
            detallesNoValido() ||
            fotoNoValido()
        )
    }

    const escribirCampoFoto = urlFoto => {

        const productoClon = { ...producto }
        productoClon.foto = urlFoto
        setProducto(productoClon)
    }

    useEffect(() => {
        if (resetFoto) {
            setResetFoto(false)
        }
    }, [resetFoto])


    return (
        <div className="alta">
            <h1>Alta de Productos</h1>

            <form className="alta-form" onSubmit={agregar}>
                {/* <!-- campo nombre --> */}
                <div className="input-group">
                    <label htmlFor="nombre">nombre</label>
                    <input id="nombre" type="text" name="nombre" value={producto.nombre} onChange={
                        e => {
                            productoDirty.nombre = true
                            setProducto({ ...producto, nombre: e.target.value })
                        }
                    } />
                    <div className="error-detail">
                        {(nombreNoValido() && productoDirty.nombre) && <span>Este campo no es válido</span>}
                    </div>
                </div>

                {/* <!-- campo precio --> */}
                <div className="input-group">
                    <label htmlFor="precio">precio</label>
                    <input id="precio" type="number" name="precio" value={producto.precio} onChange={
                        e => setProducto({ ...producto, precio: +e.target.value })
                    } />
                    <div className="error-detail">
                        {(precioNoValido() && productoDirty.precio) && <span>Este campo no es válido</span>}
                    </div>
                </div>

                {/* <!-- campo stock --> */}
                <div className="input-group">
                    <label htmlFor="stock">stock</label>
                    <input id="stock" type="number" name="stock" value={producto.stock} onChange={
                        e => setProducto({ ...producto, stock: parseInt(e.target.value) })
                    } />
                    <div className="error-detail">
                        {(stockNoValido() && productoDirty.stock) && <span>Este campo no es válido</span>}
                    </div>
                </div>

                {/* <!-- campo marca --> */}
                <div className="input-group">
                    <label htmlFor="marca">marca</label>
                    <input id="marca" type="text" name="marca" value={producto.marca} onChange={
                        e => setProducto({ ...producto, marca: e.target.value })
                    } />
                    <div className="error-detail">
                        {(marcaNoValido() && productoDirty.marca) && <span>Este campo no es válido</span>}
                    </div>
                </div>

                {/* <!-- campo categoria --> */}
                <div className="input-group">
                    <label htmlFor="categoria">Categoría</label>
                    <select
                        id="categoria"
                        name="categoria"
                        value={producto.categoria}
                        onChange={e => setProducto({ ...producto, categoria: e.target.value })}
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="Fútbol">Fútbol</option>
                        <option value="Pesas">Pesas</option>
                        <option value="Boxeo">Boxeo</option>
                        <option value="Running">Running</option>
                        <option value="Natación">Natación</option>
                        <option value="Tenis">Tenis</option>
                    </select>

                    <div className="error-detail">
                        {(categoriaNoValido() && productoDirty.categoria) && <span>Este campo no es válido</span>}
                    </div>
                </div>


                {/* <!-- campo detalles --> */}
                <div className="input-group">
                    <label htmlFor="detalles">detalles</label>
                    <input id="detalles" type="text" name="detalles" value={producto.detalles} onChange={
                        e => setProducto({ ...producto, detalles: e.target.value })
                    } />
                    <div className="error-detail">
                        {(detallesNoValido() && productoDirty.detalles) && <span>Este campo no es válido</span>}
                    </div>
                </div>

                {/* <!-- campo foto --> */}
                <div className="input-group">
                    <label htmlFor="foto">foto</label>
                    <input id="foto" type="text" name="foto" value={producto.foto} onChange={
                        e => setProducto({ ...producto, foto: e.target.value })
                    } />

                    {/* Zona de obtención de la foto del producto */}
                    <ObtenerFoto escribirCampoFoto={escribirCampoFoto} resetFoto={resetFoto}
                    />

                    <div className="error-detail">
                        {(fotoNoValido() && productoDirty.foto) && <span>Este campo no es válido</span>}
                    </div>
                </div>

                {/* <!-- campo envio --> */}
                <div className="input-group">
                    <input id="envio" type="checkbox" name="envio" checked={producto.envio} onChange={
                        e => setProducto({ ...producto, envio: e.target.checked })
                    } />
                    <label htmlFor="envio">envío</label>
                </div>

                {/* <!-- botón de envío --> */}
                <button className={editarID ? 'btnActualizar' : 'btnAgregar'} disabled={formularioNoValido()}>
                    {editarID ? 'Actualizar' : 'Agregar'}
                </button>
            </form>

            <hr />

            {/* <!-- ------------------------------------------------------------ --> */}
            <h2>Lista de productos disponibles</h2>

            <div className="table-responsive">
                {productos.length
                    ? <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>stock</th>
                                <th>marca</th>
                                <th>categoría</th>
                                <th>detalles</th>
                                <th>foto</th>
                                <th>envío</th>
                                <th>acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                productos.map((producto, i) =>
                                    <tr key={i}>
                                        <td className="centrar">{i + 1}</td>
                                        <td>{producto.nombre}</td>
                                        <td className="centrar">${producto.precio}</td>
                                        <td className="centrar">{producto.stock}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.categoria}</td>
                                        <td>{producto.detalles}</td>
                                        <td className="centrar">
                                            <img width="75" src={producto.foto} alt={"foto de " + producto.nombre} />
                                        </td>
                                        <td className="centrar">{producto.envio ? 'Si' : 'No'}</td>
                                        <td>
                                            <button disabled={editarID} className="borrar-editar btnBorrar" onClick={
                                                () => borrar(producto.id)
                                            }>Borrar</button>

                                            {editarID && (editarID == producto.id)
                                                ? <button className="borrar-editar btnCancelar" onClick={
                                                    () => cancelar(producto.id)
                                                }>Cancelar</button>

                                                : <button className="borrar-editar btnEditar" onClick={
                                                    () => editar(producto.id)
                                                }>Editar</button>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    : <h2>No se encontraron productos para mostrar</h2>
                }
            </div>

        </div>
    )
}