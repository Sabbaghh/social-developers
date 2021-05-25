const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Post = require('../../models/Post')
const User = require('../../models/User')
const Profile = require('../../models/Profile')

//@route    POST api/Post
//@desc     make posts
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
//@route    GET api/Post
//@desc     Get all post
//@access   Private

router.get('/', auth, async (req, res) => {
	try {
		const posts = await Post.find().sort({ date: -1 })
		res.json(posts)
	} catch (error) {
		console.log(error)
		res.status(500).send('SERVER ERROR')
	}
})
//@route    GET api/Post/:id
//@desc     Get single post by id
//@access   Private

router.get('/:id', auth, async (req, res) => {
	const { id } = req.params
	try {
		const post = await Post.findById(id)
		if (!post) {
			return res.status(404).send(`there's no post`)
		}
		res.json(post)
	} catch (error) {
		if (error.kind === 'ObjectId') {
			return res.status(404).send(`there's no post`)
		}
		console.log(error)
		res.status(500).send('SERVER ERROR')
	}
})

//@route    Delete api/Post/:id
//@desc     Delet single post by id
//@access   Private

router.delete('/:id', auth, async (req, res) => {
	const { id } = req.params
	try {
		const post = await Post.findById(id)
		if (!post) {
			return res.status(404).send(`there's no post`)
		}
		//check if user owns the post

		if (post.user.toString() !== req.user.id) {
			return res.status(401).send(`the user isn't the owner of this post`)
		}

		await post.remove()
		res.status(200).send('post removed')
		res.json(post)
	} catch (error) {
		if (error.kind === 'ObjectId') {
			return res.status(404).json(`there's no post`)
		}
		console.log(error)
		res.status(500).send('SERVER ERROR')
	}
})
module.exports = router
