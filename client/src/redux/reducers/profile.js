import constants from '../constants'
const intialState = {
	profile: null,
	profiles: [],
	repos: [],
	loading: true,
	errors: {},
}

const { GET_PROFILE, PROFILE_ERROR } = constants

const profile = (state = intialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_PROFILE:
			return { ...state, profile: payload, loading: false, errors: {} }
		case PROFILE_ERROR:
			return { ...state, profile: null, errors: payload, loading: false }
		default:
			return { ...state }
	}
}

export default profile
