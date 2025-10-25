import {Request, Response} from 'express'
import * as consultaService from '../services/consulta.Service'
export const crearConsulta = async (req: Request, res: Response) => {
  try {
    const resultado = consultaService.crearConsulta(req.body)
    res.status(201).json({message: 'consulta creada con exito', resultado})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
