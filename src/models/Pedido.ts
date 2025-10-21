import {DataTypes, Model} from 'sequelize'
import sequelize from '../config/db'
import PedidoAttributes from './Interface/pedidoAttributes'
class Pedido extends Model<PedidoAttributes> implements PedidoAttributes {
  public id_pedido!: number
  public id_usuario!: number
  public fecha!: Date
  public estado!: string
  public total!: number
}

Pedido.init(
  {
    id_pedido: {
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
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Pedidos',
    timestamps: false,
  },
)

export default Pedido
