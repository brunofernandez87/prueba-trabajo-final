import {describe, it, expect} from 'vitest'
import * as reporteService from '../../src/services/reporte.Service'

describe('Reporte Service', () => {
  it('reportes devuelve array', async () => {
    const res = await reporteService.reportes()
    expect(Array.isArray(res)).toBe(true)
  })

  it('generarReporte y findReporte funcionan', async () => {
    const reporte: any = {
      id_reporte: 777,
      titulo: 'T',
      descripcion: 'D',
      fecha: '2025-10-26',
    }
    const created = await reporteService.generarReporte(reporte)
    expect(created).toHaveProperty('id_reporte')
    const found = await reporteService.findReporte(777)
    expect(found).toHaveProperty('id_reporte')
    const del = await reporteService.deleteReporte(777)
    expect(del).toHaveProperty('message')
  })
})
