import {Request, Response} from 'express'
import * as DetallePedidoService from '../services/detallePedido.Service'
export const detallePedidoID = async (req: Request, res: Response) => {
  try {
    const resultado = await DetallePedidoService.DetallePedidoID(
      parseInt(req.params.id as string),
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
    const resultado = await DetallePedidoService.modificarDetalle(
      req.body.id_detalle,
      req.body,
    )
    res.status(200).json({mesage: 'Detalle modificado', resultado})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const crearDetalle = async (req: Request, res: Response) => {
  try {
    const resultado = await DetallePedidoService.crearDetalle(req.body)
    res.status(201).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const eliminarDetalle = async (req: Request, res: Response) => {
  try {
    const resultado = await DetallePedidoService.eliminarDetalle(
      parseInt(req.params.id as string),
    )
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
