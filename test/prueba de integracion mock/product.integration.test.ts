import {describe, it, expect} from 'vitest'
import request from 'supertest'
import app from './../../src/app'
import mockProductos from '../../src/mock/productoMock.json'

describe('Pruebas de integración para productos (Mock)', () => {
  describe('GET /api/products', () => {
    it('Debería retornar todos los productos del mock', async () => {
      const response = await request(app).get('/api/products')
      expect(response.status).toBe(200)
      expect(response.body).toEqual(mockProductos)
    })
  })

  describe('GET /api/products/:id', () => {
    it('Debería retornar un producto específico si el id existe', async () => {
      const productoExistente = mockProductos[0]
      const response = await request(app).get(
        `/api/products/${productoExistente.id_producto}`,
      )
      expect(response.status).toBe(200)
      expect(response.body).toEqual(productoExistente)
    })

    it('Debería retornar un error 404 si el producto no existe', async () => {
      const idInexistente = 9999
      const response = await request(app).get(`/api/products/${idInexistente}`)
      expect(response.status).toBe(404)
      expect(response.body).toEqual({message: 'Producto no encontrado'})
    })
  })

  describe('POST /api/products', () => {
    it('Debería crear un nuevo producto y retornarlo', async () => {
      const nuevoProducto = {
        id_producto: 99,
        nombre: 'Producto de prueba',
        descripcion: 'Este es un producto de prueba',
        precio: 100,
        stock: 10,
        categoria: 'Pruebas',
      }

      const response = await request(app)
        .post('/api/products')
        .send(nuevoProducto)

      expect(response.status).toBe(201)
      expect(response.body.message).toBe('Producto creado con éxito')
      expect(response.body.product).toEqual(
        expect.objectContaining(nuevoProducto),
      )

      // Verificar que el producto fue realmente añadido (opcional, pero bueno para la integridad)
      const getResponse = await request(app).get('/api/products/99')
      expect(getResponse.status).toBe(200)
      expect(getResponse.body).toEqual(expect.objectContaining(nuevoProducto))
    })
  })
})
