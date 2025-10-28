import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'
import mockPedidos from '../../src/mock/pedidoMock.json'

describe('Pruebas de integración para Pedidos (Mock)', () => {
  describe('GET /api/pedido', () => {
    it('Debería retornar todos los pedidos', async () => {
      const response = await request(app).get('/api/pedido')
      expect(response.status).toBe(200)
      expect(response.body).toEqual(mockPedidos)
    })
  })

  describe('GET /api/pedido/:id', () => {
    it('Debería retornar un pedido específico si el id existe', async () => {
      const pedidoExistente = mockPedidos[0]
      const response = await request(app).get(
        `/api/pedido/${pedidoExistente.id_pedido}`,
        s,
      )
      expect(response.status).toBe(200)
      expect(response.body).toEqual(pedidoExistente)
    })

    it('Debería retornar un error si el pedido no existe', async () => {
      const idInexistente = 9999
      const response = await request(app).get(`/api/pedido/${idInexistente}`)
      expect(response.status).toBe(500) // El servicio devuelve 500 en lugar de 404
    })
  })

  describe('POST /api/pedido', () => {
    it('Debería crear un nuevo pedido', async () => {
      const nuevoPedido = {
        id_pedido: 11,
        id_usuario: 1,
        fecha: '1/1/2026',
        estado: 'en preparacion',
        total: 100,
      }

      const response = await request(app).post('/api/pedido').send(nuevoPedido)

      expect(response.status).toBe(201)
      expect(response.body.mesage).toBe('Pedido creado con exito')
      expect(response.body.resultado).toEqual(nuevoPedido)
    })
  })

  describe('PUT /api/pedido/', () => {
    it('Debería actualizar un pedido existente', async () => {
      const pedidoAActualizar = {...mockPedidos[1]} // Clonar para no modificar el mock original
      pedidoAActualizar.estado = 'entregado'

      const response = await request(app)
        .put('/api/pedido/')
        .send(pedidoAActualizar)

      expect(response.status).toBe(200)
      expect(response.body.message).toBe('pedido actualizado')
      expect(response.body.resultado.estado).toBe('entregado')
    })
  })

  describe('DELETE /api/pedido/:id', () => {
    it('Debería eliminar un pedido existente', async () => {
      const pedidoAEliminar = mockPedidos[3]
      const response = await request(app).delete(
        `/api/pedido/${pedidoAEliminar.id_pedido}`,
      )

      expect(response.status).toBe(200)
      expect(response.body.message).toBe('Pedido eliminado con exito')
    })
  })
})
