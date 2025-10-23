import {DataTypes, Model} from 'sequelize'
import sequelize from '../config/db'
import ReporteGeneradoAttributes from './Interface/reporteGeneradoAttributes'

class ReporteGenerado
  extends Model<ReporteGeneradoAttributes>
  implements ReporteGeneradoAttributes
{
  public id_reporte!: number
  public tipo_reporte!: string
  public readonly fecha_generacion!: Date
  public generado_por_usuario!: number
  public parametros_usados!: object | null
}

ReporteGenerado.init(
  {
    id_reporte: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo_reporte: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_generacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    generado_por_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id_usuario',
      },
    },
    parametros_usados: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    tableName: 'ReportesGenerados',
    timestamps: false,
  },
)

export default ReporteGenerado
