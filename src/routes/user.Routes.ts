import {Router} from 'express'
import {
  registerUser,
  loginUser,
  recoveryPassword,
  deleteUser,
} from '../controllers/user.Controller'

const router = Router()

// Ruta para Registrar un nuevo usuario
// POST /api/users/register
router.post('/register', registerUser)

// Ruta para Iniciar Sesión
// POST /api/users/login
router.post('/login', loginUser)
router.post('/recovery', recoveryPassword)
router.post('/delete', deleteUser)
export default router
