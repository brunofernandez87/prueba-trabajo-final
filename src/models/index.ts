// En un archivo como src/models/index.ts
// 1. Importar todos los modelos
import User from './user'
import Rol from './Rol'
import Order from './order'
import Product from './product'
import OrderDetail from './orderDetail'
import {Consultation} from '../models'
import Report from './report'

// 4. Exportar todo para que el resto de la app lo use
export {User, Rol, Order, Product, OrderDetail, Consultation, Report}
