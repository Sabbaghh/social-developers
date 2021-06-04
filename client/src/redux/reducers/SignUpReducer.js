//reducer
const SignUpReducer = (state = 0, action) => {
	switch (action.type) {
		case 'PET_INCREASE':
			return state + action.Number
		case 'PET_DECREASE':
			return state - action.Number
		default:
			return state
	}
}

export default SignUpReducer
