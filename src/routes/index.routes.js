import { Router } from 'express'
import employeesRouter from './employees.routes.js'
employeesRouter

const router = Router()
router.use(employeesRouter)

export default router
