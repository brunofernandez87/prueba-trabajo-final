import {Request, Response} from 'express'
import * as userService from '../services/user.Service'

// Controlador para el REGISTRO
export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.register(req.body)
    res
      .status(201)
      .json({message: 'Usuario registrado con éxito', user: newUser})
  } catch (error: any) {
    // Manejo de errores (ej: email duplicado)
    res.status(400).json({message: error.message})
  }
}

// Controlador para el LOGIN
export const loginUser = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const {token} = await userService.login(email, password)
    res.status(200).json({message: 'Login exitoso', token: token})
  } catch (error: any) {
    // Manejo de errores (ej: credenciales inválidas)
    res.status(401).json({message: error.message})
  }
}
