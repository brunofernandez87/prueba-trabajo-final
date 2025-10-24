import {Request, Response} from 'express'
import * as reporteService from '../services/reporte.Service'
export const getReportes = async (req: Request, res: Response) => {
  try {
    const resultado = await reporteService.reportes()
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const getReporteporID = async (req: Request, res: Response) => {
  try {
    const reporte = await reporteService.findReporte(
      parseInt(req.params.id as string),
    )
    res.status(200).json(reporte)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const crearReporte = async (req: Request, res: Response) => {
  try {
    const reporte = await reporteService.generarReporte(req.body)
    res.status(201).json({message: 'reporte generado con exito', reporte})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
export const eliminarReporte = async (req: Request, res: Response) => {
  try {
    const resultado = await reporteService.deleteReporte(
      parseInt(req.params.id as string),
    )
    res.status(200).json(resultado)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
