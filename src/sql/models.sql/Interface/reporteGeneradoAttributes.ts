interface ReporteGeneradoAttributes {
  id_reporte: number
  tipo_reporte: string
  fecha_generacion: Date
  generado_por_usuario: number
  parametros_usados: object | null
}
export default ReporteGeneradoAttributes
// sacar tipo_reporte
// sacar parametros_usados
