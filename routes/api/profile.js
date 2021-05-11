const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const { check, validationResult } = require('express-validator')

//@route    GET api/profile/me
//@desc     get current users profile
//@access   private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			'user',
			['name', 'avatar'],
		)
		if (!profile) {
			return res.status(400).json({ msg: 'there is no profile for this user' })
		}

		res.json(profile)
	} catch (err) {
		res.status(500).json({ error: err.message })
	}
})

//@route    Post api/profile/
//@desc     create or update current users profile
//@access   private

router.post('/', auth, async (req, res) => {})

module.exports = router
