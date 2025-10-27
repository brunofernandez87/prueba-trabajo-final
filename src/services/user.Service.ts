import Usuario from '../models/Usuario'
import data from '../mock/usuariosMock.json'
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
export const borrar = async (email: string, password_raw: string) => {
  const user = await data.find(
    u => u.email === email && u.password_hash === password_raw,
  )
  if (user) {
    const usuario = data.findIndex(
      u => u.email === email && u.password_hash === password_raw,
    )
    if (usuario >= 0) data.splice(usuario, 1)
    return {message: 'Usuario eliminado'}
  }
  return {message: 'Credenciales invalidas'}
}
//El login se hace con email y password_raw.
