import UserAttributes from './Interface/userAttributes'

class User implements UserAttributes {
  public id_user!: number
  public name!: string
  public email!: string
  public password_hash!: string
  public id_rol!: number | 1
  public readonly create!: string
  constructor(userData: User) {
    this.id_user = userData.id_user
    this.name = userData.name
    this.email = userData.email
    this.password_hash = userData.password_hash
    this.id_rol = 1
    this.create = '23/10/25'
  }
}

export default User
