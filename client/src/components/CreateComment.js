import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createComment } from '../redux/actions/post'

const CreateComment = ({ postId }) => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({ text: '' })
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })
	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(createComment(formData, postId))
	}
	return (
		<div onSubmit={(e) => onSubmit(e)} className='post-form'>
			<div className='bg-primary p'>
				<h3>Leave A Comment</h3>
			</div>
			<form className='my-1 form'>
				<textarea
					name='text'
					cols='30'
					rows='5'
					placeholder='Comment on this post'
					required
					value={formData.text}
					onChange={(e) => onChange(e)}
				></textarea>
				<input type='submit' className='my-1 btn btn-dark' value='Submit' />
			</form>
		</div>
	)
}

export default CreateComment
