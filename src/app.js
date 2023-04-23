import express from 'express'
import cors from 'cors'
import router from './routes/index.routes.js'

export const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log('Server running on port ' + process.env.PORT)
})
// app.listen(5005, () => console.log('Server is started'))
