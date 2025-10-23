import UsuarioAttributes from './Interface/usuarioAttributes'

class Usuario implements UsuarioAttributes {
  public id_usuario!: number
  public nombre!: string
  public email!: string
  public password_hash!: string
  public id_rol!: number | 1
  public readonly creado_en!: string
  constructor(userData: Usuario) {
    this.id_usuario = userData.id_usuario
    this.nombre = userData.nombre
    this.email = userData.email
    this.password_hash = userData.password_hash
    this.id_rol = 1
    this.creado_en = '23/10/25'
  }
}

export default Usuario
