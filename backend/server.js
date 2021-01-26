import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

app.get('/', (req, res) => {
  res.send('Server is running...')
})

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
