import express from 'express'
import User from '../models/User.js'

const deleteUsersRouter = express.Router()

deleteUsersRouter.delete('/', (request, response, next) => {
	const { name: username } = request.body

	User.findOneAndDelete(username)
		.then(() => {
			response.status(204).end()
		})
		.catch(next)
})

deleteUsersRouter.delete('/:id', (request, response, next) => {
	const { id } = request.params

	User.findByIdAndDelete(id)
		.then(() => {
			response.status(204).end()
		})
		.catch(next)
})

export default deleteUsersRouter