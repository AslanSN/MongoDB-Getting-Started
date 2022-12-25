import express from 'express'
import User from '../models/User.js'

const postUsersRouter = express.Router()

postUsersRouter.post('/', async (request, response) => {
	const { username, age, city} = request.body

	const user = new User({
		username,
		age,
		city,
	})

	const userSaved = await user.save()

	response.status(201).json(userSaved)
})

export default postUsersRouter