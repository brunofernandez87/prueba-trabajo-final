import {describe, it, expect} from 'vitest'
import {request} from '../../utils/request'

describe('Reportes API', () => {
  it('GET /api/reportes -> 200', async () => {
    const res = await request.get('/api/reportes')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('POST /api/reportes -> 201 crear reporte', async () => {
    const reporte = {
      id_reporte: 20,
      titulo: 'Reporte Test',
      descripcion: 'Descripcion pruebas',
      fecha: '2025-10-26',
    }
    const res = await request.post('/api/reportes').send(reporte)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('message')
    expect(res.body.reporte).toHaveProperty('id_reporte')
  })
})
