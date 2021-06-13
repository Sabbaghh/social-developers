import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../redux/actions/post'

const CreatePost = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		text: '',
	})
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })
	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(createPost(formData))
	}
	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Say Something...</h3>
			</div>
			<form className='my-1 form' onSubmit={(e) => onSubmit(e)}>
				<textarea
					name='text'
					cols='30'
					rows='5'
					placeholder='Create a post'
					required
					onChange={(e) => onChange(e)}
					value={formData.text}
				></textarea>
				<input type='submit' className='my-1 btn btn-dark' value='Submit' />
			</form>
		</div>
	)
}

export default CreatePost
