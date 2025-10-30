import ProductAttributes from './Interface/productAttributes'
class Product implements ProductAttributes {
  public id_product!: number
  public name!: string
  public description!: string | ''
  public price!: number
  public stock!: number
  public category!: string
  public readonly create!: string
  constructor(ProductData: Product) {
    this.id_product = ProductData.id_product
    this.name = ProductData.name
    this.description = ProductData.description
    this.price = ProductData.price
    this.category = ProductData.category
    this.stock = ProductData.stock
    this.create = '23/10/2025'
  }
}

export default Product
