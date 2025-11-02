// En un archivo como src/models/index.ts
// 1. Importar todos los modelos
import Usuario from './user'
import Rol from './Rol'
import Pedido from './order'
import Producto from './product'
import DetallePedido from './orderDetail'
import Consulta from './Consultation'
import ReporteGenerado from './report'

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
