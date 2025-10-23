import ConsultaAttributes from './Interface/consultaAtrributes'
class Consulta implements ConsultaAttributes {
  public id_consulta!: number
  public id_usuario!: number
  public id_producto!: number
  public mensaje!: string
  public readonly fecha_consulta!: Date
}

export default Consulta
