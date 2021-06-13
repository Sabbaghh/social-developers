import axios from 'axios'
import constants from '../constants'
import { setAlert } from './alert'
const { GET_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES, ADD_POST } = constants

export const getPostByID = (postId) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/post/${postId}`)
		dispatch({ type: GET_POST, payload: res.data })
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

//remove a post by id

export const removePostBtID = (postId) => async (dispatch) => {
	if (window.confirm(`Are you sure ? this can't be undone`)) {
		try {
			await axios.delete(`/api/post/${postId}`)
			dispatch(getPosts())
			dispatch(setAlert(`Your post have been deleted`))
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
}

export const createPost = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}
		const body = JSON.stringify({ ...formData })
		const res = await axios.post('/api/post', body, config)
		dispatch({
			type: ADD_POST,
			payload: res.data,
		})
		dispatch(setAlert('Post created', 'success'))
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
