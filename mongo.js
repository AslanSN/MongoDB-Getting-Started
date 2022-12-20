import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const { MONGO_DB_URI } = process.env

mongoose.set('strictQuery', true)

mongoose.connect(MONGO_DB_URI)
	.then(() => console.log('Database Connected'))
	.catch(err => console.error(err))

process.on('uncaughtException', (err) => {
	console.error(err)
	mongoose.disconnect()
})