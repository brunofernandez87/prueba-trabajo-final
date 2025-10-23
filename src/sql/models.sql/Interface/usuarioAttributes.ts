interface UsuarioAttributes {
  id_usuario: number
  nombre: string
  email: string
  password_hash: string
  id_rol: number | null
  creado_en: Date
}
export default UsuarioAttributes
