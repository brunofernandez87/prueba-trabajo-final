import PedidoAttributes from './Interface/pedidoAttributes'
class Pedido implements PedidoAttributes {
  public id_pedido!: number
  public id_usuario!: number
  public fecha!: string
  public estado!: string
  public total!: number
  constructor(pedidoData: Pedido) {
    this.id_pedido = pedidoData.id_pedido
    this.id_usuario = pedidoData.id_usuario
    this.fecha = pedidoData.fecha
    this.estado = pedidoData.estado
    this.total = pedidoData.total
  }
}

export default Pedido
