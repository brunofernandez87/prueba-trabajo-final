import Rol from './Rol'
import Usuario from './Usuario'
import Producto from './Producto'
import Pedido from './Pedido'
import DetallePedido from './DetallePedido'
import Consulta from './Consulta'
import ReporteGenerado from './ReporteGenerado'

export function initAssociations() {
  Rol.hasMany(Usuario, {foreignKey: 'id_rol'})
  Usuario.belongsTo(Rol, {foreignKey: 'id_rol'})

  // Relación: Rol <--> Usuario (Uno a Muchos)
  Rol.hasMany(Usuario, {foreignKey: 'id_rol'})
  Usuario.belongsTo(Rol, {foreignKey: 'id_rol'})

  // Relación: Usuario <--> Pedido (Uno a Muchos)
  Usuario.hasMany(Pedido, {foreignKey: 'id_usuario'})
  Pedido.belongsTo(Usuario, {foreignKey: 'id_usuario'})

  // Relación: Usuario <--> Consulta (Uno a Muchos)
  Usuario.hasMany(Consulta, {foreignKey: 'id_usuario'})
  Consulta.belongsTo(Usuario, {foreignKey: 'id_usuario'})

  // Relación: Producto <--> Consulta (Uno a Muchos)
  Producto.hasMany(Consulta, {foreignKey: 'id_producto'})
  Consulta.belongsTo(Producto, {foreignKey: 'id_producto'})

  // Relación: Usuario <--> ReporteGenerado (Uno a Muchos)
  Usuario.hasMany(ReporteGenerado, {foreignKey: 'generado_por_usuario'})
  ReporteGenerado.belongsTo(Usuario, {foreignKey: 'generado_por_usuario'})

  // Relación: Pedido <--> DetallePedido (Uno a Muchos)
  Pedido.hasMany(DetallePedido, {foreignKey: 'id_pedido'})
  DetallePedido.belongsTo(Pedido, {foreignKey: 'id_pedido'})

  // Relación: Producto <--> DetallePedido (Uno a Muchos)
  Producto.hasMany(DetallePedido, {foreignKey: 'id_producto'})
  DetallePedido.belongsTo(Producto, {foreignKey: 'id_producto'})
}
