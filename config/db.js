const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.mongoURI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		console.log('mongo connected')
	} catch (err) {
		console.error(err.message)
		//exit process wth fails
		process.exit(1)
	}
}

module.exports = connectDB
