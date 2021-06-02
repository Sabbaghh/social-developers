const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	text: {
		type: String,
		required: true,
	},
	name: {
		type: String,
	},
	avatar: {
		type: String,
	},
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'user',
			},
		},
	],
	comments: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'user',
			},
			text: {
				type: String,
				required: true,
			},
			avatar: {
				type: String,
			},
			name: {
				type: String,
			},
			date: {
				type: Date,
				defualt: Date.now,
			},
		},
	],
})

module.exports = Post = mongoose.model('post', PostSchema)
