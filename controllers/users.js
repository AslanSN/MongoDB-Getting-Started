import bcrypt from 'bcrypt'

import express from 'express'
import User from '../models/User.js'

const usersRouter = express.Router()

usersRouter.get('/', async (request, response) => {
	const users = await User.find({})
	response.json(users)
})

usersRouter.post('/', async (request, response) => {
	const { body } = request
	const { username, age, city, password } = body

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)

	const user = new User({
		username,
		age,
		city,
		passwordHash
	})

	const userSaved = await user.save()

	response.status(201).json(userSaved)
})

usersRouter.delete('/', (request, response, next) => {
	const { name } = request.body

	User.findOneAndDelete(name)
		.then(() => {
			response.status(204).end()
		})
		.catch(next)
})

export default usersRouter