import { useEffect, useState } from 'react'
import './Index.css'
import { useStateLocalStorage } from '../../Hooks/useStateLocalStorage'

import servicioPedidos from '../../servicios/pedidos'

import './pago'

import { Wallet } from '@mercadopago/sdk-react';
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { actionSetCantidad } from '../../state/actions'

export function Index() {
    const [mensaje, setMensaje] = useState('');
    const [carrito, setCarrito] = useStateLocalStorage('carrito', [])
    const [pagar, setPagar] = useState(false)
    const [compraStatus, setCompraStatus] = useState({
        payment_id: 'null',
        status: 'null',
        merchant_order_id: 'null'
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const cantidad = carrito.length
        dispatch(actionSetCantidad(cantidad))
    }, [carrito])

    useEffect(() => {
        //console.warn('useEffect carrito')

        async function recibirDatosPago() {
            const parameters = new URL(window.location.href.replace(/#\//g, ''))

            const compra = {}
            compra.payment_id = parameters.searchParams.get('payment_id') || 'null'
            compra.status = parameters.searchParams.get('status') || 'null'
            compra.merchant_order_id = parameters.searchParams.get('merchant_order_id') || 'null'


            if (compra.status != 'null') {
                setCompraStatus(compra)
                if (compra.status == 'approved') {
                    await generarPedido(carrito)
                    navigate('/carrito')
                    await new Promise(r => setTimeout(r, 3000))
                    navigate('/')
                }
            }
        }
        recibirDatosPago()

    }, [])

    function borrarCarrito() {

        if (confirm('¿Está seguro de borrar todo el carrito?')) {
            setCarrito([])
            setPagar(false)
        }
    }

    async function generarPedido(carrito) {

        const pedido = {
            fyh: new Date().toLocaleString(),
            estadoPago: 'pendiente',
            productos: carrito
        };

        await servicioPedidos.enviar(pedido);

        setMensaje("Pedido enviado con éxito.");

        setTimeout(() => {
            setCarrito([]);
            setMensaje('');
            navigate('/')
        }, 3000);
        
    }

    function decrementarItem(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id == id)
        if (producto.cantidad > 1) {
            producto.cantidad--
            setCarrito(carritoClon)
            setPagar(false)
        }
    }

    function incrementarItem(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id == id)
        if (producto.cantidad < producto.stock) {
            producto.cantidad++
            setCarrito(carritoClon)
            setPagar(false)
        }
    }

    function borrarItem(id) {
        if (confirm(`¿Está seguro de borrar el producto del carrito de id ${id}?`)) {
            const carritoClon = [...carrito]
            const index = carritoClon.findIndex(p => p.id == id)
            carritoClon.splice(index, 1)
            setCarrito(carritoClon)
            setPagar(false)
        }
    }


    // ----------- CONFIGURACIÓN y CONTROL DEL BOTÓN DE PAGO (Wallet) ---------------
    const customization = {
        theme: 'default',
        valueProp: 'security_safety',
        customStyle: {
            buttonHeight: '60px',
            borderRadius: '40px',
            verticalPadding: '10px',
            horizontalPadding: '10px',
        }
    }

    const onReady = () => {
    }

    const onError = error => {
    }

    const onSubmit = () => {

        return new Promise((resolve, reject) => {
            servicioPedidos.getPreferenceId(carrito)
                .then(preferenceId => resolve(preferenceId))
                .catch(error => reject(error))
        })
    }
    // ------------------------------------------------------------------------------

    return (
        <div className="carrito">
            <h1>Carrito de Compras</h1>
            <br /><br />
            {mensaje && (
                <div className="mensaje-exito">
                    {mensaje}
                    <h2>Pedido recibido</h2>
                    <p>Su pedido fue registrado exitosamente.</p>
                    <p>Nos comunicaremos para coordinar el pago.</p>
                </div>
            )}

            {/* ----- Cartel de lresultado de loa operación de pago ----- */}
            {compraStatus.status != 'null' &&
                <div style={{
                    backgroundColor: compraStatus.status == 'approved' ? 'lightgreen' : 'lightpink',
                    width: '50%',
                    margin: '0 auto',
                    padding: '10px',
                    borderRadius: '20px',
                    fontSize: '22px'
                }}>
                    <h2>Pago {compraStatus.status == 'approved' ? 'exitoso' : 'rechazado'} </h2>
                    <hr />
                    <h3><i><u>Estado de compra:</u></i></h3>
                    <ul>
                        <li><h4>payment_id: {compraStatus.payment_id}</h4></li>
                        <li><h4>status: {compraStatus.status}</h4></li>
                        <li><h4>merchant_order_id: {compraStatus.merchant_order_id}</h4></li>
                    </ul>
                </div>
            }

            {/* --------------------------------------------------------- */}

            {carrito.length > 0 &&
                <>
                    <button className="carrito_borrar_pedir carrito_borrar" onClick={borrarCarrito}>Borrar Todo</button>
                    <table>
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Producto</th>
                                <th>$</th>
                                {/* <th>marca</th> */}
                                <th>foto</th>
                                {/* <th>stock</th> */}
                                <th>cantidad</th>
                                <th>subtotal</th>
                                <th>acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carrito.map((producto, i) =>
                                    <tr key={i}>
                                        {/* <td className="centrar">{producto.id}</td> */}
                                        {/* <td className="centrar">{i + 1}</td> */}
                                        <td>{producto.nombre}</td>
                                        <td className="centrar">${producto.precio}</td>
                                        {/* <td>{producto.marca}</td> */}
                                        <td className="centrar"><img width="75" src={producto.foto} alt={"foto de " + producto.nombre} /></td>                                         {/* <td>{producto.stock}</td> */}
                                        <td className="centrar">
                                            {producto.cantidad}
                                            <button className="btnIncDec btnDec" onClick={() => decrementarItem(producto.id)}>-</button>
                                            <button className="btnIncDec btnInc" onClick={() => incrementarItem(producto.id)}>+</button>
                                        </td>
                                        <td className="centrar">${producto.precio * producto.cantidad}</td>
                                        <td>
                                            <button className="btnBorrar" onClick={() => borrarItem(producto.id)}>Borrar</button>
                                        </td>
                                    </tr>
                                )
                            }
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th><h3>TOTAL</h3></th>
                                <th><h3>${carrito.reduce((acc, p) => acc + (p.precio * p.cantidad), 0)}</h3></th>
                                <th></th>
                                
                            </tr>
                        </tbody>
                    </table>
                    <button className="carrito_borrar_pedir carrito_pedir" onClick={() => generarPedido(carrito)}>Pedir</button>
                    {/* Renderiza el botón de pago */}
                    {/* <div style={{ width: '300px', margin: '20px auto' }}>
                        <Wallet initialization={{ preferenceId: '1608436973-3481035c-d186-4ca5-ace9-d7bee6d4d5a0' }} />
                    </div> */}

                    {!pagar
                        ? <button className="carrito_borrar_pedir carrito_pedir" onClick={() => setPagar(true)}>
                            Pagar
                        </button>

                        : <div id="wallet-container">
                            { /* https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/additional-settings/configure-button-appearance#editor_2 */}
                            <Wallet
                                customization={customization}
                                onReady={onReady}
                                onError={onError}
                                onSubmit={onSubmit}
                            />
                        </div>
                    }


                </>
            }
            {!carrito.length && <h2>No se encontraron pedidos para mostrar</h2>}
        </div>
    )
}