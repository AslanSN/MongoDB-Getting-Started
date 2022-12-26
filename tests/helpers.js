import supertest from 'supertest'
import { app } from '..'
import User from '../models/User'

export const api = supertest(app)

export const getUsers = async () => {
	const usersDB = await User.find({})
	return usersDB.map(user => user.toJSON())
}