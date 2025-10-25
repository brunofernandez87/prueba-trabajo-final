import ConsultaAttributes from './Interface/consultaAtrributes'
class Consulta implements ConsultaAttributes {
  public id_consulta!: number
  public id_usuario!: number
  public id_producto!: number
  public mensaje!: string
  public readonly fecha_consulta!: string
  constructor(consultaData: Consulta) {
    this.id_consulta = consultaData.id_consulta
    this.id_usuario = consultaData.id_usuario
    this.id_producto = consultaData.id_producto
    this.mensaje = consultaData.mensaje
    this.fecha_consulta = consultaData.fecha_consulta
  }
}

export default Consulta
