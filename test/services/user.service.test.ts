import {describe, it, expect} from 'vitest'
import * as userService from '../../src/services/user.Service'
import users from '../../src/mock/usuariosMock.json'
import {Usuario} from '../../src/models'

describe('User Service', () => {
  it('register crea un usuario nuevo y evita duplicados', async () => {
    const usuario: any = {
      id_usuario: 13,
      nombre: 'UTest',
      email: 'usuariotest@email.com',
      password_hash: 'secret',
    }
    const created = await userService.register(usuario)
    expect(created).toHaveProperty('email')

    await expect(userService.register(usuario)).rejects.toThrow()
  })

  it('login valida credenciales existentes', async () => {
    // Usamos un usuario del mock (comparamos password_raw con password_hash)
    const usuarioMock = users[0]
    const logged = await userService.login(
      usuarioMock.email,
      usuarioMock.password_hash,
    )
    expect(logged).toHaveProperty('email')
    expect(logged.email).toBe(usuarioMock.email)
  })

  it('borrar elimina usuario por email+password', async () => {
    const usuario: Usuario = {
      id_usuario: 9997,
      nombre: 'BDel',
      email: 'usuarioeliminar@email.com',
      password_hash: 'contraseñaborrar',
    }
    await userService.register(usuario)
    const res = await userService.borrar(usuario.email, usuario.password_hash)
    expect(res).toHaveProperty('message')
  })
})
