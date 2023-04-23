import { db } from '../database/database.connection.js'

export async function postEmployees(req, res) {
  const { name, document, email, phone, birth_date, salary, createdAt } =
    req.body
  const createEmployee = `INSERT INTO employees (name, document, email,
    phone, birth_date, salary, createdAt) VALUES ('${name}', '${document}',
    '${email}', '${phone}', '${birth_date}', '${salary}', '${createdAt}')`

  try {
    await db.execute(createEmployee, function (err) {
      if (
        err ||
        !name ||
        !document ||
        !email ||
        !phone ||
        !birth_date ||
        !salary ||
        !createdAt
      ) {
        return res.sendStatus(422)
      }
      res.sendStatus(200)
    })
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getEmployees(_, res) {
  const getEmployeesData = 'SELECT * FROM employees'
  try {
    await db.execute(getEmployeesData, (err, data) => {
      if (err) {
        return res.send(422)
      }
      const date = data
      res.send(date)
    })
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function getEmployeesId(req, res) {
  const { id } = req.params
  const employeeId = id.replace(':', '')
  const getEmployeeId = `SELECT name, document, email, phone, 
  birth_date, salary, createdAt FROM employees WHERE id = '${employeeId}'`
  if (!employeeId || employeeId.length === 0) return sendStatus(422)
  try {
    await db.execute(getEmployeeId, (err, data) => {
      if (err || data.length === 0) {
        return res.send(422)
      }
      const date = data
      res.send(date)
    })
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function putEmployees(req, res) {
  const { id } = req.params
  const { name, document, email, phone, birth_date, salary, createdAt } =
    req.body
  const employeeId = id.replace(':', '')
  const getEmployeeId = `SELECT id from employees WHERE id = '${employeeId}'`
  const updateEmployee =
    'UPDATE employees SET `name` = ?, `document` = ?, `email` = ?, `phone` = ?, `birth_date` = ?, `salary` = ?, `createdAt` = ? WHERE `id` = ?'

  const employee = [name, document, email, phone, birth_date, salary, createdAt]

  try {
    db.query(getEmployeeId, (err, results) => {
      if (err || !results || results.length === 0) {
        return res.sendStatus(422)
      }
      db.execute(updateEmployee, [...employee, employeeId], function (err) {
        if (err) {
          return res.sendStatus(422)
        }
        res.sendStatus(200)
      })
    })
  } catch (err) {
    res.sendStatus(500)
  }
}

export async function deleteEmployees(req, res) {
  const { id } = req.params
  const employeeId = id.replace(':', '')
  const deleteEmployee = `DELETE FROM employees WHERE id = '${employeeId}'`
  if (!employeeId || employeeId.length === 0) return sendStatus(422)
  try {
    await db.execute(deleteEmployee, err => {
      if (err) {
        return res.send(422)
      }
      res.sendStatus(200)
    })
  } catch (err) {
    res.sendStatus(500)
  }
}
