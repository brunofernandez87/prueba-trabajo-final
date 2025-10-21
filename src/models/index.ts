// En un archivo como src/models/index.ts

import Usuario from './Usuario'
import Rol from './Rol'
import Pedido from './Pedido'

// Un Rol puede tener muchos Usuarios
Rol.hasMany(Usuario, {foreignKey: 'id_rol'})

// Un Usuario pertenece a un solo Rol
Usuario.belongsTo(Rol, {foreignKey: 'id_rol'})

// Un Usuario puede tener muchos Pedidos
Usuario.hasMany(Pedido, {foreignKey: 'id_usuario'})

// Un Pedido pertenece a un solo Usuario
Pedido.belongsTo(Usuario, {foreignKey: 'id_usuario'})

// Y así con todas las demás relaciones...
