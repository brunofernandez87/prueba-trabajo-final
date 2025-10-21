import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import Usuario from './models/Usuario'
import Rol from './models/Rol'
import userRoutes from './routes/user.Routes' // <--- AÑADIR ESTA LÍNEA 1
import productRoutes from './routes/product.Routes' // <-- 1. IMPORTAR RUTAS DE PRODUCTOS

const app: Application = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: '🚀 API de Agro-Insumos funcionando correctamente' })
})

// --- RUTA DE PRUEBA DE ASOCIACIONES (la podés dejar o borrar) ---
app.get('/test-user/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const usuario = await Usuario.findByPk(id, {
      include: [
        {
          model: Rol,
          attributes: ['nombre'],
        },
      ],
    })

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.status(200).json(usuario)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
})

// --- AÑADIR ESTA LÍNEA 2 ---
// Con esto, todas las rutas de userRoutes (register, login)
// empezarán con /api/users
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes) // <-- 2. USAR LAS RUTAS DE PRODUCTOS

export default app
