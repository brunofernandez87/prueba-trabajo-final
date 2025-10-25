import {crearConsulta} from '../controllers/consulta.Controller'
import {Router} from 'express'
const router = Router()
router.post('/', crearConsulta)
export default router
