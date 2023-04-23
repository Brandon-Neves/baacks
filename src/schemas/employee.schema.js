import joi from 'joi'

export const employeeSchema = joi.object({
  name: joi.string().required(),
  document: joi.string().required().min(11).max(18),
  email: joi.string().email().required(),
  phone: joi.string().required().min(11),
  birth_date: joi.string().required().min(10),
  salary: joi.number().min(3),
  createdAt: joi.string().required().min(10)
})
