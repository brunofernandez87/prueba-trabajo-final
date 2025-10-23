import ReporteGeneradoAttributes from './Interface/reporteGeneradoAttributes'

class ReporteGenerado implements ReporteGeneradoAttributes {
  public id_reporte!: number
  public tipo_reporte!: string
  public readonly fecha_generacion!: Date
  public generado_por_usuario!: number
  public parametros_usados!: object | null
}

export default ReporteGenerado
