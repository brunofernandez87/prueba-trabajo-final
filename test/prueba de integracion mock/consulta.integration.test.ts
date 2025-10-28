import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'

describe('Pruebas de integración para Consultas (Mock)', () => {
  describe('POST /api/consulta', () => {
    it('Debería crear una nueva consulta con éxito', async () => {
      const nuevaConsulta = {
        id_consulta: 11,
        id_usuario: 1,
        id_producto: 1,
        mensaje: 'Esta es una consulta de prueba',
        fecha_consulta: '1/1/2026',
      }

      const response = await request(app)
        .post('/api/consulta')
        .send(nuevaConsulta)

      expect(response.status).toBe(201)
      expect(response.body.message).toBe('consulta creada con exito')
      expect(response.body.resultado).toEqual(nuevaConsulta)
    })
  })
})
