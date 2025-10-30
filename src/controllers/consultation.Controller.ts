import {Request, Response} from 'express'
import * as consultaService from '../services/consultation.Service'
export const createConsultation = async (req: Request, res: Response) => {
  try {
    const result = await consultaService.createConsultation(req.body)
    res.status(201).json({message: 'consulta creada con exito', result})
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json(error.message)
    }
  }
}
