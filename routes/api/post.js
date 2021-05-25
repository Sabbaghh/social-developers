const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Post = require('../../models/Post')
const User = require('../../models/User')
const Profile = require('../../models/Profile')

//@route    POST api/Post
//@desc     TEST route
//@access   Private
router.post(
	'/',
	[auth, [check('text', 'text is required').not().isEmpty()]],
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() })
		}
		try {
			const user = await User.findById(req.user.id)
			const newPost = new Post({
				user: req.user.id,
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
			})

			const post = await newPost.save()
			res.json(post)
		} catch (error) {
			console.log(error)
			res.status(500).send('SERVER ERROR')
		}
	},
)

module.exports = router
