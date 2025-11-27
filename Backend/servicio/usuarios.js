
import config from '../config.js'
import ModelFactory from '../model/DAOs/usuarios/usuariosFactory.js'
//import { validar } from './validaciones/pedidos.js'


class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }


    loginUsuario = async credenciales => {
            const usuarios = await this.model.obtenerUsuarios()

            const usuarioLogeadoOK = usuarios.filter(
                u => u.email === credenciales.email && u.password === credenciales.password
            )

                if(usuarioLogeadoOK.length == 1){
                    const {nombre, email, admin} = usuarioLogeadoOK[0]
                    const usuario = {nombre, email, admin}
                    return {status: 'loginOk', usuario}
                }
                    else{return { status: 'loginerror' }
                }
        
    }
    
    registrarUsuario = async credenciales => {
            const usuarioRegistrado = await this.model.guardarUsuarios(credenciales)
            return usuarioRegistrado
        
    }
}

export default Servicio