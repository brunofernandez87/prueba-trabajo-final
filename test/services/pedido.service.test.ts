import {describe, it, expect} from 'vitest'
import * as pedidoService from '../../src/services/pedido.Service'

describe('Pedido Service', () => {
  it('pedido devuelve array', async () => {
    const res = await pedidoService.pedido()
    expect(Array.isArray(res)).toBe(true)
  })

  it('pedidoID devuelve pedido existente', async () => {
    const pedido = await pedidoService.pedidoID(1)
    expect(pedido).toHaveProperty('id_pedido')
  })

  it('agregarPedido crea un nuevo pedido', async () => {
    const pedido: any = {
      id_pedido: 123,
      id_usuario: 1,
      estado: 'nuevo',
      fecha: '2025-10-26',
      total: 0,
    }
    const created = await pedidoService.agregarPedido(pedido)
    expect(created).toHaveProperty('id_pedido')
  })

  it('actualizarPedido modifica un pedido', async () => {
    const updated = await pedidoService.actualizarPedido(123, {
      estado: 'mod',
      fecha: '2025-10-27',
      total: 10,
    } as any)
    expect(updated).toBeDefined()
    expect(updated.estado).toBe('mod')
  })

  it('eliminarPedido devuelve mensaje', async () => {
    const res = await pedidoService.eliminarPedido(123)
    expect(res).toHaveProperty('message')
  })
})
