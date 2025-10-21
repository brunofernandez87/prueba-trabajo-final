import Producto from '../models/Producto'

// Obtener todos los productos con paginación
export const getAllProducts = async (page: number, limit: number) => {
  const offset = (page - 1) * limit
  const {count, rows} = await Producto.findAndCountAll({
    limit,
    offset,
  })
  return {
    totalItems: count,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
    products: rows,
  }
}

// Obtener un producto por su ID
export const getProductById = async (id: number) => {
  const product = await Producto.findByPk(id)
  if (!product) {
    throw new Error('Producto no encontrado')
  }
  return product
}

// Crear un nuevo producto
export const createProduct = async (productData: any) => {
  const newProduct = await Producto.create(productData)
  return newProduct
}

// Actualizar un producto existente
export const updateProduct = async (id: number, productData: any) => {
  const product = await getProductById(id) // Reutilizamos la función para verificar si existe
  await product.update(productData)
  return product
}

// Eliminar un producto
export const deleteProduct = async (id: number) => {
  const product = await getProductById(id) // Verificamos si existe
  await product.destroy()
  return {message: 'Producto eliminado correctamente'}
}
