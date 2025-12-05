import './App.css'
import { /* BrowserRouter, */ HashRouter, Link, Route, Routes } from 'react-router'

import { Navbar } from './componentes/Navbar'

import { Index as Inicio } from './componentes/INICIO/Index'
import { Index as Alta } from './componentes/ALTA/Index'
import { Index as Carrito } from './componentes/CARRITO/Index'
import { Index as Contacto } from './componentes/CONTACTO/Index'
import { Index as Nosotros } from './componentes/NOSOTROS/Index'
import { Index as Novedades } from './componentes/NOVEDADES/Index'

import Footer from './componentes/Footer'
import { useSelector } from 'react-redux'


function App() {

  const cantidad = useSelector(state => state.cantidad)

  return (
    <div className='app'>
      <>
        <HashRouter >
          <header className="site-header">
            <div className="container">
              <Link to="/" id="logo" aria-label="Ir al inicio">SPORT</Link>
              <Navbar />
              {/*<div id="barra-busqueda">
                 <form id="search-form" action="#">
                  <label htmlFor="buscar">Buscar</label>
                  <input id="buscar" type="text" placeholder="Producto..." />
                  <button type="submit" className="btn-buscar">Buscar</button>
                </form>
              </div> */}              

              <button id="boton-carrito">
                <Link to="/carrito" className='boton-carrito' aria-label="Abrir carrito" >C</Link>
              </button>
              <button id="menu-btn" aria-label="Abrir menú" onClick={() => {
                document.body.classList.toggle('menu-open');
              }}>
                ☰
              </button>
            </div>
          </header>

          <main>
            <Routes>
              <Route index element={<Inicio />} />

              <Route path="inicio" element={<Inicio />} />
              <Route path="alta" element={<Alta />} />
              <Route path="carrito" element={<Carrito />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="novedades" element={<Novedades />} />

              <Route path="*" element={<Inicio />} />
            </Routes>
          </main>

          <Footer year={2025} autor="MR" />
        </HashRouter>
      </>
    </div>
  )
}

export default App
