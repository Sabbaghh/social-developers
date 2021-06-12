import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { likePost, unlikePost } from '../redux/actions/post'
import { useDispatch } from 'react-redux'

const PostItem = ({ posts }) => {
	const dispatch = useDispatch()
	const like = (id) => {
		dispatch(likePost(id))
	}
	const unlike = (id) => {
		dispatch(unlikePost(id))
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
						{/* {console.log(posts.likes)} */}
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

				<a href='!#' className='btn btn-primary'>
					Discussion{' '}
					<span className='comment-count'>
						{posts.comments && posts.comments.length}
					</span>
				</a>
				{/* <button type='button' className='btn btn-danger'>
														<i className='fas fa-times'></i>
													</button> */}
			</div>
		</div>
	)
}

export default PostItem
