const express = require('express')
const router = express.Router()

//@route    GET api/Post
//@desc     TEST route
//@access   PUBLIC
router.get('/', (req, res) => {
	res.send('post route')
})

module.exports = router
