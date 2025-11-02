interface UserAttributes {
  id_user: number
  name: string
  email: string
  password_hash: string
  id_rol: number | null
  create: string
}
export default UserAttributes
