import Producto from '../models/Producto'
import data from '../mock/productoMock.json'
// Obtener todos los productos con paginación
export const getAllProducts = async () => {
  return data
}
// Obtener un producto por su ID
export const getProductById = async (id: number) => {
  const product = data.find(p => p.id_producto === id)
  if (!product) {
    throw new Error('Producto no encontrado')
  }
  return product
}

// Crear un nuevo producto
export const createProduct = async (productData: Producto) => {
  const newProducto = await new Producto(productData)
  data.push(newProducto)
  return newProducto
}

// Actualizar un producto existente
export const updateProduct = async (id: number, productData: Producto) => {
  const producto = await getProductById(id) // Reutilizamos la función para verificar si existe
  if (producto) {
    producto.nombre = productData.nombre
    producto.descripcion = productData.descripcion
    producto.precio = productData.precio
    producto.stock = productData.stock
    producto.categoria = productData.categoria
  }
  return producto
}

// Eliminar un producto
export const deleteProduct = async (id: number) => {
  const product = await getProductById(id) // Verificamos si existe
  if (product) {
    const a = data.findIndex(d => d.id_producto === id)
    data.splice(a)
    return {message: 'Producto eliminado correctamente'}
  }
  return {message: 'Producto no encontrado'}
}
