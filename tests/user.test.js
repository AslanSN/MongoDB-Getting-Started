import { server } from '..'
import User from '../models/User'
import { api, getUsers } from './helpers'
import mongoose from 'mongoose'

describe('creating a new user', () => {
	beforeEach(async () => {
		await User.deleteMany({})
	})

	test('works as expected creating a fresh username', async () => {
		const usersAtStart = await getUsers()

		const newUser = {
			username: 'myAslancito',
			age: 19,
			city: 'whatever'
		}

		await api.post('/api/users')
			.send(newUser)
			.expect(201)
			.expect('Content-Type', /application\/json/)

		const usersAtEnd = await getUsers()

		expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

		const usernames = usersAtEnd.map(u => u.username)
		expect(usernames).toContain(newUser.username)
	})

	afterAll(() => {
		mongoose.connection.close()
		server.close()
	})
})