import {Request, Response} from 'express'
import * as userService from '../services/user.Service'

// Controlador para el REGISTRO
export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.register(req.body)
    res
      .status(201)
      .json({message: 'Usuario registrado con éxito', user: newUser})
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({message: error.message})
    }
  }
}

// Controlador para el LOGIN
export const loginUser = async (req: Request, res: Response) => {
  try {
    const {email, password} = req.body
    const usuario = await userService.login(email, password)
    const usuarioname = usuario.nombre
    res.status(200).json({message: 'Login exitoso', usuarioname})
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({message: error.message})
    }
  }
}
export const recuperarContraseña = async (req: Request, res: Response) => {
  try {
    await userService.recuperarContraseña(req.body.email)
    res.status(200).json({message: 'contraseña restablecida'})
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json(error.message)
    }
  }
}
