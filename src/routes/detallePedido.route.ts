import {Router} from 'express'
import {
  detallePedidoID,
  modificarDetalle,
  crearDetalle,
  eliminarDetalle,
} from '../controllers/detallePedido.Controller'
const router = Router()
router.get('/:id', detallePedidoID)
router.put('/', modificarDetalle)
router.post('/', crearDetalle)
router.delete('/', eliminarDetalle)
export default router
