import {describe, it, expect} from 'vitest'
import * as productService from '../../src/services/product.Service'

describe('Product Service', () => {
  it('getAllProducts devuelve un array', async () => {
    const res = await productService.getAllProducts()
    expect(Array.isArray(res)).toBe(true)
  })

  it('getProductById devuelve producto existente', async () => {
    const p = await productService.getProductById(1)
    expect(p).toHaveProperty('id_producto')
    expect(p.id_producto).toBe(1)
  })

  it('getProductById lanza error si no existe', async () => {
    await expect(productService.getProductById(16516)).rejects.toThrow()
  })

  it('create/update/delete funcionan correctamente', async () => {
    const producto: any = {
      id_producto: 123456,
      nombre: 'Primer producto',
      descripcion: 'producto de prueba',
      categoria: 'prueba',
      precio: 1,
      stock: 1,
    }
    const created = await productService.createProduct(producto)
    expect(created).toHaveProperty('id_producto')

    const updated = await productService.updateProduct(123456, {
      nombre: 'Editado',
      descripcion: 'editar',
      precio: 2,
      stock: 3,
      categoria: 'edit',
    } as any)
    expect(updated).toBeDefined()
    expect(updated.nombre).toBe('Editado')

    const del = await productService.deleteProduct(123456)
    expect(del).toHaveProperty('message')
  })
})
