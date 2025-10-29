import Usuario from '../models/Usuario'
import data from '../mock/usuariosMock.json'
import nodemailer from 'nodemailer'
const enviador = nodemailer.createTransport({
  host: process.env.Email_host,
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})
// Función para el REGISTRO
export const register = async (userData: Usuario) => {
  // 1. Verificar si el email ya existe
  const existingUser = await data.find(u => u.email === userData.email)
  if (existingUser) {
    throw new Error('El correo electrónico ya está en uso')
  }
  const newUser = await new Usuario(userData)
  data.push(newUser)
  return newUser
}

// Función para el LOGIN
export const login = async (email: string, password_raw: string) => {
  const user = await data.find(
    u => u.email === email && u.password_hash === password_raw,
  )

  if (!user) {
    throw new Error('Credenciales inválidas') // Mensaje genérico por seguridad
  }

  return user
}
export const borrar = async (email: string, password: string) => {
  const user = await data.find(
    u => u.email === email && u.password_hash === password,
  )
  if (user) {
    const usuario = data.findIndex(
      u => u.email === email && u.password_hash === password,
    )
    if (usuario >= 0) data.splice(usuario, 1)
    return {message: 'Usuario eliminado'}
  }
  return {message: 'Credenciales invalidas'}
}
//El login se hace con email y password_raw.
export const recuperarContraseña = async (email: string) => {
  const usuario = await data.find(d => d.email === email)
  if (!usuario) {
    throw new Error('El email no esta asociado con una cuenta')
  }
  try {
    usuario.password_hash = 'contra restaurar'
    // cambiar a una funcion que pase una contraseña
    await enviador.sendMail({
      from: '"Ecommerce" <no-reply@agro.com>',
      to: email,
      subject: 'restablecer contraseña',
      html: `<h1>contraseña restablecida a ${usuario.password_hash}</h1>`,
    })
    return {success: true}
  } catch (error) {
    console.error('Error al enviar email:', error)
    return {success: false, error}
  }
}
