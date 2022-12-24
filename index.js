import './mongo.js'

// import bcrypt from 'bcrypt'
import express from 'express'
import cors from 'cors'
// import User, { userSchema } from './models/User.js'

//Middlewares
import handleErrors from './middlewares/handleErrors.js'
import notFound from './middlewares/notFound.js'
import usersRouter from './controllers/users.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
	response.send('<h1>Backend inicializado</h1>')
})

app.use('/api/users', usersRouter)

/**
 * *Error handlers*
 */
app.use(notFound)
app.use(handleErrors)

export const server = app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`)
})
