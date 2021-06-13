import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useSelector, useDispatch } from 'react-redux'
import { removeComment } from '../redux/actions/post'

const Comments = ({ comment, postID }) => {
	const dispatch = useDispatch()
	//constant if user owns the comment
	const { user } = useSelector((state) => state.auth)
	const userOwnsComment = user._id === comment.user
	const deleteComment = (commentID) => {
		dispatch(removeComment(postID, commentID))
	}
	return (
		<>
			<div className='p-1 my-1 bg-white post'>
				<div>
					<Link to={`/profile/${comment.user}`}>
						<img className='round-img' src={comment.avatar} alt='avatar' />
						<h4>{comment.name}</h4>
					</Link>
				</div>
				<div>
					<p className='my-1'>{comment.text}</p>
					<Moment className='post-date' format='YYYY/MM/DD'>
						{comment.date}
					</Moment>
				</div>
				{userOwnsComment && (
					<button
						type='button'
						className='btn btn-danger'
						onClick={() => deleteComment(comment._id)}
					>
						<i className='fas fa-times'></i>
					</button>
				)}
			</div>
		</>
	)
}

export default Comments
