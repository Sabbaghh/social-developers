const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
	//Get the token from the header
	const token = req.header('x-auth-token')
	//check if there is a token
	if (!token) {
		return res.status(401).json({ msg: 'no token, authentication deniend' })
	}

	try {
		const decoded = jwt.verify(token, process.env.jwtSecret)
		req.user = decoded.user
		next()
	} catch (err) {
		res.status(401).json({ msg: 'token is not valid' })
	}
}
