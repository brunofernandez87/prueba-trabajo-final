import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

// Cargar las variables de entorno desde el archivo .env
dotenv.config()

// Creamos la instancia de Sequelize con la configuración
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD || undefined,
  {
    dialect: 'mysql',
    ...(process.env.DB_HOST ? {host: process.env.DB_HOST} : {}),
    ...(process.env.DB_PORT ? {port: Number(process.env.DB_PORT)} : {}),
  },
)

export default sequelize
