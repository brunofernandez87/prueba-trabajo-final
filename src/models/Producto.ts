import ProductoAttributes from './Interface/productoAttributes'
class Producto implements ProductoAttributes {
  public id_producto!: number
  public nombre!: string
  public descripcion!: string | ''
  public precio!: number
  public stock!: number
  public categoria!: string
  public readonly creado_en!: string
  constructor(ProductData: Producto) {
    this.id_producto = ProductData.id_producto
    this.nombre = ProductData.nombre
    this.descripcion = ProductData.descripcion
    this.precio = ProductData.precio
    this.categoria = ProductData.categoria
    this.stock = ProductData.stock
    this.creado_en = '23/10/2025'
  }
}

export default Producto
