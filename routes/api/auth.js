const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
//
const { check, validationResult } = require('express-validator')

//@route    GET api/Auth
//@desc     TEST route
//@access   PUBLIC
//NOTE : adding auth middleware make the  router protected
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')
		res.json(user)
	} catch (err) {
		res.status(500).send('server error')
	}
})

//login router
router.post(
	'/',
	[
		check('email', 'please enter a valid email').isEmail(),
		check('password', 'please enter a valid password').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		//get the email and the password from request body
		const { email, password } = req.body
		try {
			let user = await User.findOne({ email })
			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'There is no user with this email' }] })
			}
			const isPasswordValid = await bcrypt.compare(password, user.password)
			if (!isPasswordValid) {
				return res.status(400).json({ errors: [{ msg: 'invalid  password' }] })
			}

			const payload = { user: { id: user.id } }
			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(error, token) => {
					if (error) throw err
					res.json({ token })
				},
			)
		} catch (errors) {
			res.status(500).json({ errors: error.message })
		}
	},
)
module.exports = router
