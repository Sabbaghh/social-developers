const express = require('express')
const router = express.Router()
// validate user post request by express-validator
const { check, validationResult } = require('express-validator')
//gravatar used for images
const gravatar = require('gravatar')
//bcrypt for encrypting the user password
const bcrypt = require('bcryptjs')
//jwt token for user authentication
const jwt = require('jsonwebtoken')
//bring the config to get secretjwt
const User = require('../../models/User')
require('dotenv').config()
//-------------
//@route    POST api/users
//@desc     Register User
//@access   PUBLIC
router.post(
	'/',
	[
		check('name', 'Name is required').not().isEmpty(),
		check('email', 'please enter  a valid email').isEmail(),
		check(
			'password',
			'please enter a password with 6 or more charachter',
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req)
		const { name, password, email } = req.body
		if (!errors.isEmpty()) {
			//send a bad request 400
			return res.status(400).json({ errors: errors.array() })
		}
		try {
			//see if the user exist
			let user = await User.findOne({ email })
			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] })
			}
			//get user gravatar
			const avatar = gravatar.url(email, {
				s: '200',
				r: 'pg',
				d: 'mm',
			})
			//encrypt password
			const salt = await bcrypt.genSalt(10)
			const hashPassword = await bcrypt.hash(password, salt)
			user = new User({ name, email, avatar, password: hashPassword })
			await user.save()

			//return jsonwebtoken

			//create a payload with user id
			const payload = {
				user: {
					id: user.id,
				},
			}
			//create token with the payload
			jwt.sign(
				payload,
				process.env.jwtSecret,
				{ expiresIn: 360000 },
				(error, token) => {
					if (error) throw err
					res.json({ token })
				},
			)
		} catch (err) {
			console.log(err.message)
			res.status(500).send('server Error')
		}
	},
)

module.exports = router
