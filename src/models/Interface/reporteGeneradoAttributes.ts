interface ReporteGeneradoAttributes {
  id_reporte: number
  tipo_reporte: string
  fecha_generacion: string
  generado_por_usuario: number
  parametros_usados: Array<object>
}
export default ReporteGeneradoAttributes
// sacar tipo_reporte
// sacar parametros_usados
