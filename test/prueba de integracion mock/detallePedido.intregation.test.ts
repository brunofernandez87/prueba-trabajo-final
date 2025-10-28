import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'
import mockDetalle from '../../src/mock/detallepedidoMock.json'
describe('Detalle pedido integration', () => {
  describe('get/api/detalle', () => {
    it('deberia retornar el detalle de un pedido con el ID', async () => {
      const detalle = mockDetalle[0]
      const response = await request(app).get(
        `/api/detalle/${detalle.id_detalle}`,
      )
      expect(response.status).toBe(200)
      expect(response.body).toEqual(detalle)
    })

    it('deberia tirar error si el ID no coincide', async () => {
      const response = await request(app).get('/api/pedido/:500')
      expect(response.status).toBe(500) //corregir error a 404 revisar resto de test
    })
  })
  describe('put/api/detalle', () => {
    it('deberia actualizar un detalle existente', async () => {
      const detalle = {...mockDetalle[0]}
      detalle.precio_unitario = 30
      const response = await request(app).put('/api/detalle').send(detalle)
      expect(response.status).toBe(200)
      expect(response.body.mesage).toBe('Detalle modificado')
      expect(response.body.resultado.precio_unitario).toBe(30)
    })
  })
  describe('post/api/detalle', () => {
    it('deberia crear un detalle', async () => {
      const detalle = {
        id_detalle: 1,
        id_pedido: 6,
        id_producto: 5,
        cantidad: 4,
        precio_unitario: 19.99,
      }
      const response = await request(app).post('/api/detalle').send(detalle)
      expect(response.status).toBe(201)
      expect(response.body).toEqual(detalle)
    })
  })
  describe('delete/api/detalle', () => {
    it('eliminar un detalle existente', async () => {
      const detalle = {...mockDetalle[0]}
      const response = await request(app)
        .delete(`/api/detalle/${detalle.id_detalle}`)
        .send(detalle)
      expect(response.status).toBe(200)
      expect(response.body.message).toBe('Detalle eliminado con exito')
    })
  })
})
