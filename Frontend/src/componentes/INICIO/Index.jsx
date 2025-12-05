import './Index.css'

import { useEffect, useState } from 'react'

import servicioProductos from '../../servicios/productos'
import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'
import { actionSetCantidad } from '../../state/actions'
import { useDispatch } from 'react-redux'


export function Index() {
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useStateLocalStorage('carrito', [])

    const dispatch = useDispatch()

    useEffect(() => {

        const cantidad = carrito.length
         dispatch(actionSetCantidad(cantidad))
    }, [carrito])

    useEffect(() => {

            ; (async () => {
                // obtiendo los productos del recurso remoto
                const productos = await servicioProductos.getAll()

                // Guardo los productos obtenidos en el recurso local
                setProductos(productos)
            })()

        return () => {
        }
    }, [])

    function agregar(producto) {
        const carritoClon = [...carrito]
        const id = producto.id
        const productoExistente = carritoClon.find(p => p.id == id)

        if (!productoExistente) {
            producto.cantidad = 1
            carritoClon.push(producto)
        }
        else {
            productoExistente.cantidad++
            const index = carritoClon.findIndex(p => p.id == id)
            carritoClon.splice(index, 1, productoExistente)
        }
        setCarrito(carritoClon)
    }

    return (
        <div className="inicio">
            <div className="promo-banner">
                <div className="promo-texto">
                    <h2>¡GRAN LIQUIDACIÓN!</h2>
                    <p>HASTA 50% OFF EN INDUMENTARIA</p>
                    <a href="#" className="boton-cta">COMPRAR AHORA</a>
                </div>
                <div className="promo-imagen">
                    <img className="imgBanner" src="\src\assets\corredor.png" alt="Atleta corriendo" />
                </div>
            </div>


            <div className="section-cards">
                <div className="section-cards-header">
                    <h1>LISTADO DE PRODUCTOS</h1>
                </div>

                <div className="section-cards-body">
                    {productos.length
                        ? productos.map((producto, i) =>
                            <section key={i}>
                                <h3>{producto.nombre}</h3>
                                <img src={producto.foto} alt={'foto de ' + producto.nombre} />
                                <p><b>Precio:</b> ${producto.precio}</p>
                                <p><b>Stock:</b> {producto.stock}</p>
                                <p><b>Marca:</b> {producto.marca}</p>
                                <p><b>Categoría:</b> {producto.categoria}</p>
                                <p><b>Detalles:</b> {producto.detalles}</p>
                                <br />
                                <p><b style={{ color: 'gold' }}>Envío:</b> {producto.envio ? 'Si' : 'No'}</p>
                                <button id={"btnComprar-" + producto.id} onClick={
                                    () => agregar(producto)
                                }>Agregar al carrito</button>
                            </section>
                        )
                        : <h2>No se encontraron productos para mostrar</h2>
                    }
                </div>
            </div>
        </div>
    )
}