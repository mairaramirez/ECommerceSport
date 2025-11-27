import express from 'express'

import Controlador from '../controlador/usuarios.js'

class Router {
    #controlador = null

    constructor() {
        this.#controlador = new Controlador()
    }

     config() {
        const router = express.Router()

        router.post('/login', this.#controlador.loginUsuario)
        router.post('/register', this.#controlador.registerUsuario)

        return router
    }
}

export default Router