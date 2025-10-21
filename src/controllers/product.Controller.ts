import {Request, Response} from 'express'
import * as productService from '../services/product.Service'

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const result = await productService.getAllProducts(page, limit)
    res.status(200).json(result)
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    //                                          👇 ¡AQUÍ!
    const product = await productService.getProductById(
      parseInt(req.params.id as string),
    )
    res.status(200).json(product)
  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await productService.createProduct(req.body)
    res
      .status(201)
      .json({message: 'Producto creado con éxito', product: newProduct})
  } catch (error: any) {
    res.status(400).json({message: error.message})
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await productService.updateProduct(
      parseInt(req.params.id as string),
      req.body,
    )
    res.status(200).json({
      message: 'Producto actualizado con éxito',
      product: updatedProduct,
    })
  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    //                                          👇 ¡AQUÍ!
    await productService.deleteProduct(parseInt(req.params.id as string))
    res.status(200).json({message: 'Producto eliminado con éxito'})
  } catch (error: any) {
    res.status(404).json({message: error.message})
  }
}
