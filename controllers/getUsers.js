import express from 'express'
import User from '../models/User.js'

const getUsersRouter = express.Router()

getUsersRouter.get('/', async (request, response) => {
	const users = await User.find({})
	response.json(users)
})

getUsersRouter.get('/:id', async (request, response) => {
	const { id } = request.params
	const user = await User.findById(id)
	response.json(user)
})

export default getUsersRouter