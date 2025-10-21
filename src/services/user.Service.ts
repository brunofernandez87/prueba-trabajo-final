import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Usuario from '../models/Usuario'
import {Op} from 'sequelize'

// Función para el REGISTRO
export const register = async (userData: any) => {
  // 1. Verificar si el email ya existe
  const existingUser = await Usuario.findOne({
    where: {email: userData.email},
  })
  if (existingUser) {
    throw new Error('El correo electrónico ya está en uso')
  }

  // 2. Encriptar la contraseña
  const salt = await bcrypt.genSalt(10)
  const passwordHash = await bcrypt.hash(userData.password, salt)

  // 3. Crear el nuevo usuario (Asumimos id_rol = 1 para 'Cliente' como el que creaste)
  const newUser = await Usuario.create({
    id_usuario: userData.id_usuario,
    nombre: userData.nombre,
    email: userData.email,
    password_hash: passwordHash,
    id_rol: 1, // Asignamos rol 'Cliente' por defecto
    creado_en: new Date(),
  })

  // No devolvemos el hash de la contraseña por seguridad
  const {password_hash, ...userWithoutPassword} = newUser.get()
  return userWithoutPassword
}

// Función para el LOGIN
export const login = async (email: string, password_raw: string) => {
  // 1. Buscar al usuario por email
  const user = await Usuario.findOne({
    where: {email: email},
    attributes: ['id_usuario', 'email', 'id_rol', 'password_hash'],
  })

  if (!user) {
    throw new Error('Credenciales inválidas') // Mensaje genérico por seguridad
  }

  // 2. Comparar la contraseña ingresada con la encriptada
  const isMatch = await bcrypt.compare(password_raw, user.password_hash)
  if (!isMatch) {
    throw new Error('Credenciales inválidas') // Mismo mensaje
  }

  // 3. Crear el Token (JWT)
  const payload = {
    id: user.id_usuario,
    email: user.email,
    rol: user.id_rol,
  }

  const secret = process.env.JWT_SECRET as string
  const token = jwt.sign(payload, secret, {expiresIn: '1h'}) // El token expira en 1 hora

  return {token}
}
