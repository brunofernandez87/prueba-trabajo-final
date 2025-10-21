import {DataTypes, Model, Optional} from 'sequelize'
import sequelize from '../config/db'
import RolAttributes from './Interface/rolAttributes'

class Rol extends Model<RolAttributes> implements RolAttributes {
  public id_rol!: number
  public nombre!: string
}

Rol.init(
  {
    id_rol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'Roles',
    timestamps: false,
  },
)

export default Rol
