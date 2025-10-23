import {DataTypes, Model} from 'sequelize'
import sequelize from '../config/db'
import ProductoAttributes from './Interface/productoAttributes'
class Producto extends Model<ProductoAttributes> implements ProductoAttributes {
  public id_producto!: number
  public nombre!: string
  public descripcion!: string | null
  public precio!: number
  public stock!: number
  public readonly creado_en!: Date
}

Producto.init(
  {
    id_producto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    creado_en: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Productos',
    timestamps: false, // Usamos 'creado_en' en lugar de los timestamps automáticos
  },
)

export default Producto
