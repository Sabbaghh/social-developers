import axios from 'axios'
import constants from '../constants'
import { setAlert } from './alert'
const { GET_POST, GET_POSTS, POST_ERROR } = constants

//get all posts
export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/post')
		console.log(res)
		dispatch({ type: GET_POSTS, payload: res.data })
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: {
				msg: err.response.statusText,
				status: err.response.status,
			},
		})
	}
}
