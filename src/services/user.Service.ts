import User from '../models/user'
import data from '../mock/userMock.json'
import nodemailer from 'nodemailer'
import bcrypt from 'bcryptjs'

const transport = nodemailer.createTransport({
  host: process.env.Email_host,
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
// Función para el REGISTRO
export const register = async (userData: User) => {
  // 1. Verificar si el email ya existe
  const existingUser = await data.find(u => u.email === userData.email)
  if (existingUser) {
    throw new Error('El correo electrónico ya está en uso')
  }
  const newUser = await new User(userData)
  data.push(newUser)
  return newUser
}

// Función para el LOGIN
export const login = async (email: string, password_raw: string) => {
  const user = await data.find(
    u => u.email === email && u.password_hash === password_raw,
  )

  if (!user) {
    throw new Error('Credenciales inválidas')
  }

  return user
}
export const eliminate = async (email: string, password: string) => {
  const user = await data.find(
    u => u.email === email && u.password_hash === password,
  )
  if (user) {
    const user = data.findIndex(
      u => u.email === email && u.password_hash === password,
    )
    if (user >= 0) data.splice(user, 1)
    return {message: 'Usuario eliminado'}
  }
  return {message: 'Credenciales invalidas'}
}

//El login se hace con email y password_raw.
export const recoveryPassword = async (email: string) => {
  const user = await data.find(d => d.email === email)
  if (!user) {
    throw new Error('El email no esta asociado con una cuenta')
  }
  try {
    user.password_hash = 'contra restaurar'
    // cambiar a una funcion que pase una contraseña
    await transport.sendMail({
      from: '"Ecommerce" <no-reply@agro.com>',
      to: email,
      subject: 'restablecer contraseña',
      html: `<h1>contraseña restablecida a ${user.password_hash}</h1>`,
    })
    return {success: true}
  } catch (error) {
    console.error('Error al enviar email:', error)
    return {success: false, error}
  }
}

export const changePassword = async (
  id: number,
  currentPassword: string,
  newPassword: string,
) => {
  const userIndex: number = data.findIndex(u => u.id_user === id)
  if (userIndex === -1) {
    throw new Error('Usuario no encontrado')
  }

  const user = data[userIndex]
  if (!user) throw new Error('Usuario no encontrado')

  // Verifica que la contraseña actual coincida.
  const isMatch = await bcrypt.compare(currentPassword, user.password_hash)
  if (!isMatch) {
    throw new Error('Contraseña actual incorrecta')
  }

  // Hashea la nueva contraseña y la actualiza si las contraseñas coinciden.
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(newPassword, salt)
  user.password_hash = hashed

  return {message: 'Contraseña actualizada'}
}
