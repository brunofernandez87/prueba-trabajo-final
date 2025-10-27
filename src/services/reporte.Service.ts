import {ReporteGenerado} from '../models'
import data from '../mock/reporteMock.json'

//Muestra los reportes recientes
export const reportes = async () => {
  return data
}
export const generarReporte = async (reporteData: ReporteGenerado) => {
  const newReporte = await new ReporteGenerado(reporteData)
  data.push(newReporte)
  return newReporte
}
export const findReporte = async (id: number) => {
  const reporte = data.find(r => r.id_reporte === id)
  if (!reporte) {
    throw new Error('Reporte no encontrado')
  }
  return reporte
}
export const deleteReporte = async (id: number) => {
  const reporte = await findReporte(id)
  if (reporte) {
    const reporteI = data.findIndex(r => r.id_reporte === id)
    if (reporteI >= 0) data.splice(reporteI, 1)
    return {message: 'Reporte Eliminado'}
  }
  throw new Error('reporte no existe')
}
