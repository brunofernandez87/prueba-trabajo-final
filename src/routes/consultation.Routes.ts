import {createConsultation} from '../controllers/consultation.Controller'
import {Router} from 'express'
const router = Router()
router.post('/', createConsultation)
export default router
