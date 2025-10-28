import {describe, it, expect} from 'vitest'
import * as detalleService from '../../src/services/detallePedido.Service'

describe('DetallePedido Service', () => {
  it('DetallePedidoID debería devolver el detalle por id_pedido', async () => {
    const detalle = await detalleService.DetallePedidoID(6)
    expect(detalle).toBeDefined()
    expect(detalle).toHaveProperty('id_pedido')
    expect(detalle.id_detalle).toBe(6)
  })

  it('crearDetalle debería añadir y devolver el nuevo detalle', async () => {
    const newDetalle = {
      id_detalle: 30,
      id_pedido: 30,
      id_producto: 1,
      cantidad: 2,
      precio_unitario: 12.5,
    }
    const res = await detalleService.crearDetalle(newDetalle as any)
    expect(res).toBeDefined()
    expect(res).toHaveProperty('id_detalle')
    expect(res.id_detalle).toBe(30)
  })

  it('modificarDetalle debería actualizar un detalle existente', async () => {
    const updated = await detalleService.modificarDetalle(6, {
      cantidad: 11,
      precio_unitario: 1.11,
    } as any)
    expect(updated).toBeDefined()
    expect(updated.cantidad).toBe(11)
    expect(updated.precio_unitario).toBe(1.11)
  })

  it('eliminarDetalle debería devolver mensaje de éxito', async () => {
    const res = await detalleService.eliminarDetalle(1)
    expect(res).toBeDefined()
    expect(res).toHaveProperty('message')
    expect(res.message).toMatch('Detalle eliminado')
  })
})
