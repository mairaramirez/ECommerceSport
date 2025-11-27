import './Index.css'
import { Link } from "react-router-dom";


const novedades = [
    {
        id: 1,
        titulo: 'Rutinas con Bandas Elásticas',
        descripcion: 'Descubrí 5 ejercicios para activar todo tu cuerpo con una simple banda.',
        imagen: 'src/assets/bandas.jpg',
        contenido: `Estas rutinas te permiten trabajar fuerza y movilidad sin pesas, utilizando solo la resistencia de una banda elástica.  
        Comenzá con 2 series de 12 repeticiones para cada ejercicio, descansando 30 segundos entre ellos. A medida que ganes fuerza, aumentá la tensión de la banda o el número de series.  

        Ejercicios recomendados:
            • Sentadillas con banda (piernas y glúteos)  
            • Press de hombros (deltoides y brazos)  
            • Remo con banda (espalda y bíceps)  
            • Aperturas laterales (hombros y pectorales)  
            • Extensión de tríceps (brazos)  

        Ideal para activar hombros, glúteos y piernas en casa o al aire libre. Recordá mantener una respiración controlada y una postura firme durante cada movimiento.`
    },
    {
        id: 2,
        titulo: 'Eligiendo tu Colchoneta Ideal',
        descripcion: 'Cómo saber cuál es el espesor y material adecuado según tu entrenamiento.',
        imagen: "/src/assets/colchoneta.jpg",
        contenido: `Guía rápida para elegir tu colchoneta según tu entrenamiento.
        Espesor orientativo:
            • 4–6 mm: yoga, pilates de bajo impacto y trabajo de equilibrio.
            • 6–8 mm: fuerza ligera, movilidad y estiramientos.
            • 8–10 mm: HIIT / ejercicios de impacto o si tu piso es muy duro.

        Materiales:
            • TPE: buen grip, ligera, fácil de limpiar (uso general).
            • Caucho natural: máximo agarre y durabilidad (yoga dinámico/HIIT).
            • Corcho: eco y excelente agarre cuando hay sudor.
            • PVC: económica, durable, pero menos adherente con transpiración.

        Tips:
            • Si entrenás descalzo, priorizá el grip antes que el espesor.
            • Si sos sensible de rodillas/codos, subí a 8–10 mm.
            • Probá la adherencia con las manos antes de comprar.`
    },
    {
        id: 3,
        titulo: 'Errores comunes al entrenar en casa',
        descripcion: 'Los 3 fallos más frecuentes y cómo corregirlos para mejorar tus resultados.',
        imagen: "src/assets/en-casa.jpg",
        contenido: `Los 3 errores más comunes al entrenar en casa (y cómo corregirlos).

        1) No calentar
        Solución: 5–7 minutos de movilidad + activación (cadera, hombros, core).

        2) Técnica deficiente por fatiga
        Solución: filmate 20–30 segundos y ajustá postura; bajá carga si la forma se rompe.

        3) Falta de progresión/descanso
        Solución: registrá series y repeticiones; aumentá 5–10% cada 1–2 semanas y dormí 7–8 h.

        Mini rutina base (3×/sem):
            • Día A: pierna + core (sentadillas, puente de glúteo, plancha).
            • Día B: empuje (flexiones, press hombros, tríceps).
            • Día C: tirón (remo, face pull, curl bíceps).`
    },
    {
        id: 4,

        titulo: "Rutinas con Bandas Elásticas (Express 10’)",
        descripcion: "Entrenamiento rápido de cuerpo completo solo con una banda.",
        imagen: "src/assets/bandas2.jpg",
        contenido: `Entrenamiento Express de 10 minutos con banda (cuerpo completo).

        Formato: 40" trabajo / 20" descanso — 2 rondas (total 10’).
        1) Monster walks (glúteos)
        2) Remo a dos manos (espalda)
        3) Sentadilla con abducción (piernas)
        4) Press de hombros (deltoides)
        5) Pull-apart (postura)

        Consejos:
            • Elegí una resistencia que te permita terminar con buena técnica.
            • Mantené tensión constante; controlá la vuelta del movimiento.
            • Si te sobra tiempo, sumá una 3.ª ronda.`
    },
    {
        id: 5,
        titulo: "Rutinas con Bandas Elásticas (Progresiones)",
        descripcion: "Cómo pasar de principiante a intermedio en 4 semanas.",
        imagen: "src/assets/bandas3.jpg",
        contenido: `Progresiones con banda elástica: de principiante a intermedio en 4 semanas.

        Semana 1: 2 rondas × 10–12 rep (banda ligera)
        Semana 2: 3 rondas × 10–12 rep (banda ligera)
        Semana 3: 3 rondas × 12–15 rep (banda media)
        Semana 4: 4 rondas × 12–15 rep (banda media)

        Base de ejercicios:
            • Remo • Press hombros • Peso muerto rumano • Sentadilla • Pull-apart

        Reglas:
            • Si llegás a 15 rep “fácil”, subí resistencia.
            • Técnica primero, carga después. Pausa de 60–90" entre rondas.`,
    },
    {
        id: 6,
        titulo: "Eligiendo tu Colchoneta Ideal (Materiales)",
        descripcion: "Comparativa rápida: TPE, PVC, corcho y caucho.",
        imagen: "src/assets/colchonetas2.jpg",
        contenido: `Comparativa de materiales para colchonetas (rápida y práctica).

        TPE: liviana, buen agarre, fácil de limpiar — uso general.
        Caucho natural: excelente grip y estabilidad — ideal para yoga dinámico/HIIT.
        Corcho: eco y gran agarre con sudor — sensación firme.
        PVC: resistente y económica — grip medio.

        Elegí según:
            • Tipo de entrenamiento (equilibrio vs. impacto).
            • Piso (duro → más espesor).
            • Preferencias de textura y olor.

        Tip: si hacés planchas/flexiones, privilegia el grip antes que el espesor.`,
    },
    {
        id: 7,
        titulo: "Eligiendo tu Colchoneta Ideal (Cuidado)",
        descripcion: "Limpieza, guardado y cuánto dura realmente.",
        imagen: "src/assets/colchoneta1.jpg",
        contenido: `Cuidado de tu colchoneta: limpieza, guardado y reemplazo.

        Limpieza:
            • Agua tibia + jabón neutro o spray suave; secado a la sombra.
            • Evitá alcohol/lejía que degradan el material.

        Guardado:
            • Enrollá sin comprimir demasiado; no la dejes al sol dentro del auto.
            • Usá correa/funda para protegerla del polvo.

        Cuándo reemplazar:
            • Pérdida de agarre persistente.
            • Grietas, pelado o deformaciones.
            • Olor fuerte que no desaparece tras la limpieza.

        Vida útil estimada: 12–24 meses según uso, sudor y material.`
    }
]

export function Index() {
    return (
        <div className="novedades-novedades novedades-container">
            <div className="novedades-info">
                <h2>Novedades & Guías</h2>
                <p>Enterate de las últimas notas sobre entrenamiento, equipamiento y vida saludable.</p>
                <button className="btn-acento">
                    <Link to="/contacto" className="btn-link">Suscribirme</Link>
                </button>
            </div>

            <div className="novedades">
                <div className="novedades-grid">
                    {novedades.map((item) => (
                        <article key={item.id} className="novedad-card">
                            <img src={item.imagen} alt={item.titulo} />
                            <div className="novedad-body">
                                <h3 className='texto-card'>{item.titulo}</h3>
                                <p className='texto-card'>{item.descripcion}</p>

                                {/* Acordeón personalizado con Ver más / Ver menos */}
                                <details>
                                    <summary>Ver más</summary>
                                    <p className="novedad-contenido">{item.contenido}</p>
                                </details>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}