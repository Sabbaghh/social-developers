import axios from 'axios'
import constants from '../constants'
import { setAlert } from './alert'
const { GET_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES } = constants

//get all posts
export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/post')
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

//like a post
export const likePost = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/post/like/${id}`)
		dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } })
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

//unlike a post
export const unlikePost = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/post/unlike/${id}`)
		dispatch({ type: UPDATE_LIKES, payload: { id, likes: res.data } })
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
