import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

export async function ensureDatabase() {
  const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} = process.env
  if (!DB_NAME) {
    throw new Error('DB_NAME no definido en el archivo .env')
  }
  if (!DB_USER) {
    throw new Error('DB_USER no definido en el archivo .env')
  }

  const connection = await mysql.createConnection({
    host: DB_HOST || 'localhost',
    port: DB_PORT ? Number(DB_PORT) : 3306,
    user: DB_USER as string,
    ...(DB_PASSWORD ? {password: DB_PASSWORD} : {}),
    multipleStatements: true,
  })

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`)
  await connection.end()
  console.log(`✅ Base de datos "${DB_NAME}" verificada/creada.`)
}
