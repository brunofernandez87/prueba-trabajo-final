import {DataTypes, Model} from 'sequelize'
import sequelize from '../config/db'
import DetallePedidoAttributes from './Interface/detallePedidoAttributes'

class DetallePedido
  extends Model<DetallePedidoAttributes>
  implements DetallePedidoAttributes
{
  public id_detalle!: number
  public id_pedido!: number
  public id_producto!: number
  public cantidad!: number
  public precio_unitario!: number
}

DetallePedido.init(
  {
    id_detalle: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Pedidos',
        key: 'id_pedido',
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
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'DetallePedido',
    timestamps: false,
  },
)

export default DetallePedido
