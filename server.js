const express = require('express')
const connectDB = require('./config/db')
const app = express()
//connect to mongo database
connectDB()
//testing
app.get('/', (req, res) => {
	res.send('HELLO EXPRESS')
})

//init middleware
//this line should be initialized to get post data
app.use(express.json({ extend: false }))

//define routes
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/post', require('./routes/api/post'))
app.use('/api/profile', require('./routes/api/profile'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`)
})
