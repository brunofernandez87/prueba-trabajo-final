import {Router} from 'express'
import {
  registerUser,
  loginUser,
  recuperarContraseña,
} from '../controllers/user.Controller'

const router = Router()

// Ruta para Registrar un nuevo usuario
// POST /api/users/register
router.post('/register', registerUser)

// Ruta para Iniciar Sesión
// POST /api/users/login
router.post('/login', loginUser)
router.post('/recuperar', recuperarContraseña)
export default router
