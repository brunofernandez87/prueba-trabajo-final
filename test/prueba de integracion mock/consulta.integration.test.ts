import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'

describe('Pruebas de integración para Consultas (Mock)', () => {
  describe('POST /api/consulta', () => {
    it('Debería crear una nueva consulta con éxito', async () => {
      const newConsultation = {
        id_consultation: 11,
        id_user: 1,
        id_product: 1,
        message: 'Esta es una consulta de prueba',
        date_consultation: '1/1/2026',
      }

      const response = await request(app)
        .post('/api/consultation')
        .send(newConsultation)

      expect(response.status).toBe(201)
      expect(response.body.message).toBe('consulta creada con exito')
      expect(response.body.result).toEqual(newConsultation)
    })
  })
})
