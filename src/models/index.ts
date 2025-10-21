// En un archivo como src/models/index.ts
// 1. Importar todos los modelos
import Usuario from './Usuario'
import Rol from './Rol'
import Pedido from './Pedido'
import Producto from './Producto'
import DetallePedido from './DetallePedido'
import Consulta from './Consulta'
import ReporteGenerado from './ReporteGenerado'

// 2. Importar la función que crea las asociaciones
import {initAssociations} from './associations'

// 3. Ejecutar la función de asociaciones
initAssociations()

// 4. Exportar todo para que el resto de la app lo use
export {
  Usuario,
  Rol,
  Pedido,
  Producto,
  DetallePedido,
  Consulta,
  ReporteGenerado,
}
