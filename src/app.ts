import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import userRoutes from './routes/user.Routes'
import productRoutes from './routes/product.Routes'
import reporteRoute from './routes/reporte.Routes'
import pedidoRoutes from './routes/pedido.Routes'
import detallePedidoRoutes from './routes/detallePedido.Routes'
import consultaRoutes from './routes/consulta.Routes'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({message: 'API de Agro-Insumos funcionando correctamente'})
})
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/reportes', reporteRoute)
app.use('/api/pedido', pedidoRoutes)
app.use('/api/pedido', detallePedidoRoutes)
app.use('/api/consulta', consultaRoutes)

export default app
