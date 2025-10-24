import {Router} from 'express'
import {
  getReportes,
  getReporteporID,
  crearReporte,
  eliminarReporte,
} from '../controllers/reporte.Controller'
const router = Router()
router.get('/', getReportes)
router.get('/:id', getReporteporID)
router.post('/', crearReporte)
router.delete('/:id', eliminarReporte)
export default router
