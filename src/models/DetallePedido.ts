import DetallePedidoAttributes from './Interface/detallePedidoAttributes'

class DetallePedido implements DetallePedidoAttributes {
  public id_detalle!: number
  public id_pedido!: number
  public id_producto!: number
  public cantidad!: number
  public precio_unitario!: number
}

export default DetallePedido
