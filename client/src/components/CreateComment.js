import React from 'react'

const CreateComment = () => {
	return (
		<div className='post-form'>
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
				></textarea>
				<input type='submit' className='my-1 btn btn-dark' value='Submit' />
			</form>
		</div>
	)
}

export default CreateComment
