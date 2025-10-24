import {Request, Response} from 'express'
import * as PedidoService from '../services/pedido.Service'
export const getPedidos = async (req: Request, res: Response) => {
  try {
    const resultado = await PedidoService.pedido()
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const pedidoID = async (req: Request, res: Response) => {
  try {
    const resultado = await PedidoService.pedidoID(
      parseInt(req.params.id as string),
    )
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const eliminarPedido = async (req: Request, res: Response) => {
  try {
    const resultado = await PedidoService.eliminarPedido(
      parseInt(req.params.id as string),
    )
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const agregarPedido = async (req: Request, res: Response) => {
  try {
    const resultado = await PedidoService.agregarPedido(req.body)
    res.status(201).json({mesage: 'Pedido creado con exito', resultado})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const modificarPedido = async (req: Request, res: Response) => {
  try {
    const resultado = await PedidoService.actualizarPedido(
      parseInt(req.params.id as string),
      req.body,
    )
    res.status(200).json({message: 'pedido actualizado', resultado})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
