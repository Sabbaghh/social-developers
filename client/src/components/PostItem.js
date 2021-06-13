import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { likePost, unlikePost } from '../redux/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { removePostBtID } from '../redux/actions/post'

const PostItem = ({ posts }) => {
	const { loading, user } = useSelector((state) => state.auth)
	//this constant identify if the  user owns the post
	const userOwnsPost = !loading && posts.user === user._id
	const dispatch = useDispatch()
	const like = (id) => {
		dispatch(likePost(id))
	}
	const unlike = (id) => {
		dispatch(unlikePost(id))
	}
	const deletePost = (id) => {
		dispatch(removePostBtID(id))
	}
	return (
		<div className='p-1 my-1 bg-white post'>
			<div>
				<Link to={`/profile/${posts.user}`}>
					<img className='round-img' src={posts.avatar} alt='avatar' />
					<h4>{posts.name}</h4>
				</Link>
			</div>
			<div>
				<p className='my-1'>{posts.text}</p>
				<Moment className='post-date' format='YYYY/MM/DD'>
					{posts.date}
				</Moment>
				{/* likeButton */}
				<button
					onClick={() => like(posts._id)}
					type='button'
					className='btn btn-light'
				>
					<i className='fas fa-thumbs-up'></i>
					<span>
						{posts.likes && posts.likes.length > 0 && posts.likes.length}
					</span>
				</button>

				{/* unlikeButton */}
				<button
					onClick={() => unlike(posts._id)}
					type='button'
					className='btn btn-light'
				>
					<i className='fas fa-thumbs-down'></i>
				</button>

				<Link to={`posts/${posts._id}`} className='btn btn-primary'>
					Discussion{' '}
					<span className='comment-count'>
						{posts.comments && posts.comments.length}
					</span>
				</Link>
				{userOwnsPost && (
					<button
						onClick={() => deletePost(posts._id)}
						type='button'
						className='btn btn-danger'
					>
						<i className='fas fa-times'></i>
					</button>
				)}
			</div>
		</div>
	)
}

export default PostItem
