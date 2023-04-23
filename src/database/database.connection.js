import dotenv from 'dotenv'
import mysql from 'mysql2'
dotenv.config()

const client = new mysql.createConnection(process.env.DATABASE_URL)

try {
  await client.connect()
  console.log('Connected with mysql')
} catch (err) {
  console.log(err.message)
}

export const db = client
