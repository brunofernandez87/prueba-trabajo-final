import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'
import mockUsuarios from '../../src/mock/usuariosMock.json'

describe('Pruebas de integración para Usuarios (Mock)', () => {
  describe('POST /api/users/register', () => {
    it('Debería registrar un nuevo usuario con éxito', async () => {
      const nuevoUsuario = {
        id_usuario: 11,
        nombre: 'Usuario Prueba',
        email: 'prueba@test.com',
        password_hash: 'password123', // El mock no usa bcrypt
        id_rol: 1,
      }

      const response = await request(app)
        .post('/api/users/register')
        .send(nuevoUsuario)

      expect(response.status).toBe(201)
      expect(response.body.message).toBe('Usuario registrado con éxito')
      expect(response.body.user).toEqual(
        expect.objectContaining({
          nombre: 'Usuario Prueba',
          email: 'prueba@test.com',
        }),
      )
    })

    it('Debería retornar un error si el email ya existe', async () => {
      const usuarioExistente = mockUsuarios[0]
      const response = await request(app)
        .post('/api/users/register')
        .send(usuarioExistente)

      expect(response.status).toBe(400)
      expect(response.body.message).toBe('El correo electrónico ya está en uso')
    })
  })

  describe('POST /api/users/login', () => {
    it('Debería iniciar sesión con credenciales válidas', async () => {
      const usuarioExistente = mockUsuarios[1]
      const response = await request(app).post('/api/users/login').send({
        email: usuarioExistente.email,
        password: usuarioExistente.password_hash, // El mock usa el hash como si fuera la contraseña raw
      })

      expect(response.status).toBe(200)
      expect(response.body.message).toBe('Login exitoso')
      expect(response.body.usuarioname).toBe(usuarioExistente.nombre)
    })

    it('Debería retornar un error con credenciales inválidas', async () => {
      const response = await request(app).post('/api/users/login').send({
        email: 'noexiste@test.com',
        password: 'passwordincorrecto',
      })

      expect(response.status).toBe(401)
      expect(response.body.message).toBe('Credenciales inválidas')
    })
  })
})
