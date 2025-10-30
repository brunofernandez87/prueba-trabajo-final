import {describe, it, expect} from 'vitest'
import * as userService from '../../src/services/user.Service'
import users from '../../src/mock/userMock.json'
import user from '../../src/models/user'

describe('User Service', () => {
  it('register crea un usuario nuevo y evita duplicados', async () => {
    const user: any = {
      id_user: 13,
      nombre: 'UTest',
      email: 'usertest@email.com',
      password_hash: 'secret',
    }
    const created = await userService.register(user)
    expect(created).toHaveProperty('email')

    await expect(userService.register(user)).rejects.toThrow()
  })

  it('login valida credenciales existentes', async () => {
    // Usamos un user del mock (comparamos password_raw con password_hash)
    const userMock = users[0]
    const logged = await userService.login(
      userMock.email,
      userMock.password_hash,
    )
    expect(logged).toHaveProperty('email')
    expect(logged.email).toBe(userMock.email)
  })

  it('borrar elimina user por email+password', async () => {
    const user: user = {
      id_user: 9997,
      nombre: 'BDel',
      email: 'usereliminar@email.com',
      password_hash: 'contraseñaborrar',
    }
    await userService.register(user)
    const res = await userService.eliminate(user.email, user.password_hash)
    expect(res).toHaveProperty('message')
  })
})
