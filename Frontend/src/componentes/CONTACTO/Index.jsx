import './Index.css'


const faqs = [
    {
        q: "¿Cuánto tarda el envío?",
        a: "AMBA: 48–72 hs hábiles. Interior: 3–6 días hábiles. Te enviamos el tracking por email."
    },
    {
        q: "¿Puedo cambiar o devolver?",
        a: "Sí, dentro de los 10 días de recibido. El producto debe estar sin uso y con empaque original."
    },
    {
        q: "¿Cómo pago mi pedido?",
        a: "Aceptamos tarjetas, transferencia y billeteras virtuales. Podés pagar en cuotas según promo vigente."
    },
    {
        q: "¿Tienen tienda física?",
        a: "Vendemos online. Retiro en punto de pick-up (CABA) con cita previa."
    },
    {
        q: "¿Cómo pido factura A?",
        a: "Dejanos el CUIT y razón social en el formulario o respondé al email de confirmación del pedido."
    }
];

    const nombreNoValido = () => !/^[a-z]{3,10}$/i
    const emailNoValido = () => !/^[a-z]{3,10}$/i
    const comentariosNoValido = () => !/^[a-z]{3,10}$/i

    function formularioNoValido() {
        return (
            nombreNoValido() || 
            emailNoValido() == '' ||
            comentariosNoValido() == '' 
        )
    }

export function Index() {

    return (
        <div className="contacto">
            <h1>Formulario de Contacto</h1>
            <form action="#" method="post" id="form-contacto">
                <label htmlFor="nombre">Nombre:</label>
                <input className="requerido" type="text" id="nombre" name="nombre" required />

                <label htmlFor="email">E-mail:</label>
                <input className="requerido" type="email" id="email" name="email" required />

                <label htmlFor="comentarios">Comentarios:</label>
                <textarea className="requerido" id="comentarios" name="comentarios" rows="5" required></textarea>

                <button  type="submit"  id="contactoEnviar" disabled={formularioNoValido()}>Enviar</button>
            </form>


            {/* <!-- Seccion preguntas --> */}
            <div id="faq" className="contact-faq container">
                <h2>Preguntas frecuentes</h2>
                <div className="faq-list">
                    {faqs.map((f, i) => (
                        <details key={i} className="faq-item">
                            <summary>
                                <span>{f.q}</span>
                                <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path d="M6 9l6 6 6-6" fill="currentColor" /></svg>
                            </summary>
                            <div className="faq-answer">
                                <p>{f.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>


    )
}