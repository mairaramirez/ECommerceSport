import './Index.css'

export function Index() {

    return (
        <div className="nosotros">
            <h1 className="contenedor-titulo">Nosotros</h1>

            <div className="todo contenido">
                <div className="contenedor-media">
                    <img src="\src\assets\nosotros.jpg" alt="Equipo Distintivo" />
                </div>

                <div className="contenido-texto">
                    <p>
                        ¡Bienvenido a <strong>SPORT</strong>! Somos una empresa dedicada al mundo
                        <strong>fitness</strong> y a la vida saludable. Seleccionamos, probamos y
                        vendemos productos de entrenamiento, indumentaria técnica y accesorios
                        que de verdad suman a tus rutinas, tanto en casa como en el gym.
                    </p>

                    <p>
                        Nuestro objetivo es que entrenes mejor: productos confiables, envíos
                        rápidos y una atención cercana para resolverte todo en minutos.
                    </p>

                    <ul className="todo listado">
                        <li>Indumentaria, calzado y accesorios de alto rendimiento</li>
                        <li>Equipamiento para fuerza, cardio y movilidad</li>
                        <li>Asesoramiento previo a la compra y postventa real</li>
                        <li>Envíos a todo el país</li>
                    </ul>

                    <div className="todo extra">
                        <span>+500 productos</span>
                        <span>Marcas líderes</span>
                        <span>Atención 24/7</span>
                    </div>
                </div>
            </div>
        </div>
    )
}