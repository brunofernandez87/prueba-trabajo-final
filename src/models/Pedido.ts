import PedidoAttributes from './Interface/pedidoAttributes'
class Pedido implements PedidoAttributes {
  public id_pedido!: number
  public id_usuario!: number
  public fecha!: Date
  public estado!: string
  public total!: number
}

export default Pedido
