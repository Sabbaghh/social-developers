const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const app = express()
//connect to mongo database
connectDB()

//this line should be initialized to get the data from the api
app.use(express.json({ extend: false }))

//define routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/post', require('./routes/api/post'))
app.use('/api/profile', require('./routes/api/profile'))

//serve static assets in production
if (process.env === 'production') {
	//set a static folder
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__direname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
