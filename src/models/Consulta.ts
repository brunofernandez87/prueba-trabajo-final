import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/db'
import ConsultaAttributes from './Interface/consultaAtrributes'
class Consulta extends Model<ConsultaAttributes> implements ConsultaAttributes {
  public id_consulta!: number
  public id_usuario!: number
  public id_producto!: number
  public mensaje!: string
  public readonly fecha_consulta!: Date
}

Consulta.init(
  {
    id_consulta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id_usuario',
      },
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Productos',
        key: 'id_producto',
      },
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_consulta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Consultas',
    timestamps: false,
  },
)

export default Consulta
