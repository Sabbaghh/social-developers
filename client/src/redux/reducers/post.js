import constants from '../constants'
const { GET_POST, POST_ERROR, GET_POSTS, UPDATE_LIKES } = constants
const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {},
}

const post = (state = initialState, action) => {
	const { payload, type } = action

	switch (type) {
		case GET_POST:
			return { ...state, post: payload, loading: false, error: {} }
		case POST_ERROR:
			return {
				...state,
				loading: false,
				error: payload,
			}
		case GET_POSTS:
			return {
				...state,
				post: null,
				posts: payload,
				loading: false,
				error: {},
			}
		case UPDATE_LIKES:
			console.log(payload.likes.likes)
			return {
				...state,
				posts: state.posts.map((post) => {
					if (post._id === payload.id) {
						return { ...post, likes: payload.likes }
					} else {
						return { ...post, likes: post.likes }
					}
				}),
			}

		default:
			return { ...state }
	}
}
export default post
