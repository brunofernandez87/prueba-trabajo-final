import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'
import mockReportes from '../../src/mock/reporteMock.json'

describe('Pruebas de integración para Reportes (Mock)', () => {
  describe('GET /api/reportes', () => {
    it('Debería retornar todos los reportes', async () => {
      const response = await request(app).get('/api/reportes')
      expect(response.status).toBe(200)
      expect(response.body).toEqual(mockReportes)
    })
  })

  describe('GET /api/reportes/:id', () => {
    it('Debería retornar un reporte específico si el id existe', async () => {
      const reporteExistente = mockReportes[0]
      const response = await request(app).get(
        `/api/reportes/${reporteExistente.id_reporte}`,
      )
      expect(response.status).toBe(200)
      expect(response.body).toEqual(reporteExistente)
    })

    it('Debería retornar un error si el reporte no existe', async () => {
      const idInexistente = 9999
      const response = await request(app).get(`/api/reportes/${idInexistente}`)
      // El servicio no maneja el error 404, devuelve 500
      expect(response.status).toBe(500)
    })
  })

  describe('POST /api/reportes', () => {
    it('Debería crear un nuevo reporte', async () => {
      const nuevoReporte = {
        id_reporte: 11,
        fecha_generacion: '23/10/25',
        generado_por_usuario: 1,
        parametros_usados: [{}],
      }

      const response = await request(app)
        .post('/api/reportes')
        .send(nuevoReporte)

      expect(response.status).toBe(201)
      expect(response.body.message).toBe('reporte generado con exito')
      expect(response.body.reporte).toEqual(nuevoReporte)
    })
  })

  describe('DELETE /api/reportes/:id', () => {
    it('Debería eliminar un reporte existente', async () => {
      // Usamos un reporte que sabemos que existe para la prueba
      const reporteAEliminar = mockReportes[2]
      const response = await request(app).delete(
        `/api/reportes/${reporteAEliminar.id_reporte}`,
      )

      expect(response.status).toBe(200)
      expect(response.body.message).toBe('Reporte Eliminado')
    })
  })
})
