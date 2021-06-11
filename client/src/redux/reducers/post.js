import constants from '../constants'
const { GET_POST, POST_ERROR, GET_POSTS } = constants
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
			return { ...state, post: null, posts: [], loading: false, error: payload }
		case GET_POSTS:
			return {
				...state,
				post: null,
				posts: payload,
				loading: false,
				error: {},
			}
		default:
			return { ...state }
	}
}

export default post
