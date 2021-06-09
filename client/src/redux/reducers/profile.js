import constants from '../constants'
const intialState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	errors: {},
}

const {
	GET_PROFILE,
	PROFILE_ERROR,
	CLEAR_PROFILE,
	ADD_EDUCATION,
	ADD_EXPERIENCE,
	DELETE_EDUCATION,
	DELETE_EXPERIENCE,
	GET_PROFILES,
	GET_REPOS,
} = constants

const profile = (state = intialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_PROFILE:
		case ADD_EXPERIENCE:
		case ADD_EDUCATION:
		case DELETE_EDUCATION:
		case DELETE_EXPERIENCE:
			return { ...state, profile: payload, loading: false, errors: {} }
		case GET_PROFILES:
			return { ...state, profiles: payload, loading: false, errors: {} }
		case GET_REPOS:
			return { ...state, repos: payload, loading: false, errors: {} }
		case CLEAR_PROFILE:
			return { ...state, profile: null, repos: [], loading: false }
		case PROFILE_ERROR:
			return { ...state, profile: null, errors: payload, loading: false }
		default:
			return { ...state }
	}
}

export default profile
