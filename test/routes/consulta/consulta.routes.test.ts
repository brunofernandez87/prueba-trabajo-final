import {describe, it, expect} from 'vitest'
import {request} from '../../utils/request'

describe('Consulta API', () => {
  it('POST /api/consultation -> 201 crear consulta', async () => {
    const consultation = {
      id_consultation: 20,
      id_user: 1,
      id_product: 1,
      message: 'Consulta de prueba',
      date_consultation: '2025-10-26',
    }
    const res = await request.post('/api/consultation').send(consultation)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('result')
    expect(res.body.result).toHaveProperty('id_consultation')
  })
})
