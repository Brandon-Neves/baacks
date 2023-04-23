import { Router } from 'express'
import {
  postEmployees,
  getEmployees,
  getEmployeesId,
  putEmployees,
  deleteEmployees
} from '../controllers/employeers.Controller.js'
import validateSchema from '../middlewares/validateSchema.middleware.js'
import { employeeSchema } from '../schemas/employee.schema.js'
const employeesRouter = Router()

employeesRouter.get('/employees', getEmployees)
employeesRouter.get('/employees:id', getEmployeesId)
employeesRouter.post(
  '/employees',
  validateSchema(employeeSchema),
  postEmployees
)
employeesRouter.put(
  '/employees:id',
  validateSchema(employeeSchema),
  putEmployees
)
employeesRouter.delete('/employees:id', deleteEmployees)

export default employeesRouter
