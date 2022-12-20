import './mongo.js'

import bcrypt from 'bcrypt'
import express from 'express'
import cors from 'cors'
import User from './models/User.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
	response.send('<h1>Backend inicializado</h1>')
})

app.get('/api/users', async (request, response) => {
	const users = await User.find({})
	response.json(users)
})

app.post('/api/users', async (request, response) => {
	const { body } = request
	const { name, password } = body

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)

	const user = new User({
		name,
		passwordHash
	})

	const userSaved = await user.save()

	response.status(201).json(userSaved)
})

export const server = app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`)
})