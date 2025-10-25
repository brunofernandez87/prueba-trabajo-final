import {Pedido} from '../models'
import data from '../mock/pedidoMock.json'
export const pedido = async () => {
  //creo que no es necesario mostrar todos los pedidos ya que se deberian mostrar por ID
  return data
}
export const pedidoID = async (id: number) => {
  const pedido = data.find(p => p.id_pedido === id)
  if (!pedido) {
    throw new Error('Pedido no encontrado')
  }
  return pedido
}
export const agregarPedido = async (pedidoData: Pedido) => {
  const pedido = pedidoID(pedidoData.id_pedido)
  if (!pedido) {
    const pedido = await new Pedido(pedidoData)
    data.push(pedido)
    return pedido
  }
  throw new Error('Pedido ya existente')
}
export const eliminarPedido = async (id: number) => {
  const pedido = await pedidoID(id)
  if (!pedido) {
    throw new Error('Pedido no encontrado')
  }
  const pedidoIn = data.findIndex(p => p.id_pedido === id)
  data.slice(pedidoIn)
  return {message: 'Pedido eliminado con exito'}
}
export const actualizarPedido = async (id: number, pedidoData: Pedido) => {
  const pedido = await pedidoID(id)
  if (!pedido) {
    throw new Error('Pedido no encontrado') //tirar un error es necesario cuando ya tira error pedido ID?
  } else {
    pedido.estado = pedidoData.estado
    pedido.fecha = pedidoData.fecha
    pedido.total = pedidoData.total
    // no creo necesario modificar id e id usuario
    return pedido
  }
}
