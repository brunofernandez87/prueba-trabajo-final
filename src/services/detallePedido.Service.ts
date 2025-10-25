import {DetallePedido} from '../models'
import data from '../mock/detallepedidoMock.json'
export const DetallePedidoID = async (id: number) => {
  const detalle = data.find(d => d.id_pedido === id)
  if (detalle) {
    return detalle
  }
  throw new Error('Detalle no encontrado')
}
export const modificarDetalle = async (
  id: number,
  DetalleData: DetallePedido,
) => {
  const detalle = await DetallePedidoID(id)
  if (detalle) {
    detalle.cantidad = DetalleData.cantidad
    detalle.precio_unitario = DetalleData.precio_unitario
    return detalle
  }
  throw new Error('Detalle no encontrado')
}
export const eliminarDetalle = async (id: number) => {
  const detalle = await DetallePedidoID(id)
  if (detalle) {
    const detalleIN = data.findIndex(d => d.id_detalle === id)
    data.slice(detalleIN)
    return {message: 'Detalle eliminado con exito'}
  }
}
export const crearDetalle = async (DetalleData: DetallePedido) => {
  const detalle = await new DetallePedido(DetalleData)
  data.push(detalle)
  return detalle
}
