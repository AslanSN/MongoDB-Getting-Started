import express from 'express'
import User from '../models/User.js'

const putUsersRouter = express.Router()

putUsersRouter.put('/', async (request, response) => {
	const { username, age, city } = request.body

	const newUserInfo = {
		username,
		age,
		city
	}

	User.findOneAndUpdate(username, newUserInfo, { new: true })
		.then(result => { response.json(result) })

})

putUsersRouter.put('/:id', async (request, response) => {
	const { id } = request.params
	const { username, age, city } = request.body

	const newUserInfo = {
		username,
		age,
		city
	}

	User.findByIdAndUpdate(id, newUserInfo, { new: true })
		.then(result => { response.json(result) })

})

export default putUsersRouter