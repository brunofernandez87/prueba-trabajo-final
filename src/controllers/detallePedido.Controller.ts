import {Request, Response} from 'express'
import * as DetallePedidoService from '../services/detallePedido.Service'
export const detallePedidoID = async (req: Request, res: Response) => {
  try {
    const resultado = DetallePedidoService.DetallePedidoID(
      parseInt(req.params.id_detalle as string),
    )
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const modificarDetalle = async (req: Request, res: Response) => {
  try {
    const resultado = DetallePedidoService.modificarDetalle(
      parseInt(req.params.id_detalle as string),
      req.body,
    )
    res.status(200).json({mesage: 'detalle modificado', resultado})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const crearDetalle = async (req: Request, res: Response) => {
  try {
    const resultado = DetallePedidoService.crearDetalle(req.body)
    res.status(201).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const eliminarDetalle = async (req: Request, res: Response) => {
  try {
    const resultado = DetallePedidoService.eliminarDetalle(
      parseInt(req.params.id_detalle as string),
    )
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
