//reducer
const LoginReducer = (state = 0, action) => {
	switch (action.type) {
		case 'PET_INCREASE':
			return state + 1
		case 'PET_DECREASE':
			return state - 1
		case 'TEST':
			return state - 10
		default:
			return state
	}
}

export default LoginReducer
