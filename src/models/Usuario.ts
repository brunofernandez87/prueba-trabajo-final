import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/db'
import UsuarioAttributes from './Interface/usuarioAttributes'
class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
  public id_usuario!: number
  public nombre!: string
  public email!: string
  public password_hash!: string
  public id_rol!: number | null
  public readonly creado_en!: Date
}

Usuario.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Roles', // Nombre de la tabla a la que referencia
        key: 'id_rol',
      },
    },
    creado_en: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Usuarios',
    timestamps: false,
  },
)

export default Usuario
