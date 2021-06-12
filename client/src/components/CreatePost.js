import React from 'react'
import { useDispatch } from 'react-redux'

const CreatePost = () => {
	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Say Something...</h3>
			</div>
			<form className='my-1 form'>
				<textarea
					name='text'
					cols='30'
					rows='5'
					placeholder='Create a post'
					required
				></textarea>
				<input type='submit' className='my-1 btn btn-dark' value='Submit' />
			</form>
		</div>
	)
}

export default CreatePost
