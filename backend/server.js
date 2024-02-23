import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import profileRoutes from './routes/profileRoutes.js'
import projectRoutes from './routes/projectRoutes.js'
import servicesRoutes from './routes/servicesRoutes.js'
import skillsRoutes from './routes/skillsRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/profile', profileRoutes)
app.use('/api/projects', projectRoutes)
app.use('/api/services', servicesRoutes)
app.use('/api/skills', skillsRoutes)
app.use('/api/users', userRoutes)


app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))