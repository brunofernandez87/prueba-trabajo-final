import {describe, it, expect} from 'vitest'
import {request} from '../../utils/request'

describe('Consulta API', () => {
  it('POST /api/consulta -> 201 crear consulta', async () => {
    const consulta = {
      id_consulta: 20,
      id_usuario: 1,
      id_producto: 1,
      mensaje: 'Consulta de prueba',
      fecha_consulta: '2025-10-26',
    }
    const res = await request.post('/api/consulta').send(consulta)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('resultado')
    expect(res.body.resultado).toHaveProperty('id_consulta')
  })
})
