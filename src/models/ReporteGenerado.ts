import ReporteGeneradoAttributes from './Interface/reporteGeneradoAttributes'

class ReporteGenerado implements ReporteGeneradoAttributes {
  public id_reporte!: number
  public tipo_reporte!: string
  public readonly fecha_generacion!: string
  public generado_por_usuario!: number
  public parametros_usados!: Array<object>
  constructor(reporteData: ReporteGenerado) {
    this.id_reporte = reporteData.id_reporte
    this.tipo_reporte = reporteData.tipo_reporte
    this.fecha_generacion = '23/10/25'
    this.generado_por_usuario = reporteData.generado_por_usuario
    this.parametros_usados = [{}]
  }
}

export default ReporteGenerado
