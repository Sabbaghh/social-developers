const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
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

router.post(
	'/',
	[
		auth,
		check('status', 'status is required').not().isEmpty(),
		check('skills', 'skills are required').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		const {
			company,
			website,
			location,
			bio,
			status,
			githubusername,
			skills,
			youtube,
			facebook,
			twitter,
			instagram,
			linkedin,
		} = req.body

		// build profile object
		const profileFields = {}
		profileFields.user = req.user.id
		if (company) profileFields.company = company
		if (website) profileFields.website = website
		if (location) profileFields.location = location
		if (bio) profileFields.bio = bio
		if (status) profileFields.status = status
		if (githubusername) profileFields.githubusername = githubusername
		if (skills) {
			profileFields.skills = skills.split(',').map((skill) => skill.trim())
		}
		//build social object
		//you need to initialized profileFields.social = {}
		//becuase it will give u and error of undifiend
		profileFields.social = {}
		if (youtube) profileFields.social.youtube = youtube
		if (instagram) profileFields.social.instagram = instagram
		if (linkedin) profileFields.social.linkedin = linkedin
		if (facebook) profileFields.social.facebook = facebook
		if (twitter) profileFields.social.twitter = twitter

		try {
			let profile = await Profile.findOne({ user: req.user.id })
			if (profile) {
				//update
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true },
				)
				return res.status(200).json(profile)
			}
			//create new profile
			profile = new Profile(profileFields)
			await profile.save()
			res.status(200).send(profile)
		} catch (err) {
			res.status(500).send(err)
		}
	},
)

//@route    Get api/profile/
//@desc     Get all profiles
//@access   public

router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', ['name', 'avatar'])
		res.status(200).json(profiles)
	} catch (err) {
		res.status(500).send('server Error')
	}
})
//@route    Get api/profile/user/:user_id
//@desc     Get one profile by id
//@access   public

router.get('/user/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id,
		}).populate('user', ['name', 'avatar'])

		if (!profile) {
			return res.status(404).json({ msg: 'there is no profile for this user' })
		}
		res.status(200).json(profile)
	} catch (err) {
		if (err.kind == 'ObjectId') {
			return res.status(404).json({ msg: 'there is no profile for this user' })
		}
		res.status(500).send('server Error')
	}
})
//@route    Delete api/profile
//@desc     Delete a profile and a user
//@access   Private
router.delete('/', auth, async (req, res) => {
	console.log(req.user.id)
	try {
		//@TODO remove users posts
		//remove profile
		await Profile.findOneAndRemove({ user: req.user.id })
		//remove user
		await User.findOneAndRemove({ _id: req.user.id })
		res.status(200).json({ msg: 'user has been deleted' })
	} catch (error) {
		res.status(500).json('server error')
	}
})

module.exports = router
