import mongooseUniqueValidator from 'mongoose-unique-validator'
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	age: Number,
	city: String
})

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject._id

		delete returnedObject.__v
		delete returnedObject.passwordHash
	}
})

userSchema.plugin(mongooseUniqueValidator)

const User = model('User', userSchema)

export default User