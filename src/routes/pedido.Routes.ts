import {Router} from 'express'
import {
  getPedidos,
  pedidoID,
  eliminarPedido,
  agregarPedido,
  modificarPedido,
} from '../controllers/pedido.Controller'
const router = Router()
router.get('/', getPedidos)
router.get('/:id', pedidoID)
router.delete('/:id', eliminarPedido)
router.post('/', agregarPedido)
router.put('/', modificarPedido) //comprobar si con poner el id en el body basta o si hay que agregar a rutas
export default router
