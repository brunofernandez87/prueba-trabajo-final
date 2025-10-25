import DetallePedidoAttributes from './Interface/detallePedidoAttributes'

class DetallePedido implements DetallePedidoAttributes {
  public id_detalle!: number
  public id_pedido!: number
  public id_producto!: number
  public cantidad!: number
  public precio_unitario!: number
  constructor(DetallePedido: DetallePedido) {
    this.id_detalle = DetallePedido.id_detalle
    this.id_pedido = DetallePedido.id_pedido
    this.id_producto = DetallePedido.id_producto
    this.cantidad = DetallePedido.cantidad
    this.precio_unitario = DetallePedido.precio_unitario
  }
}

export default DetallePedido
