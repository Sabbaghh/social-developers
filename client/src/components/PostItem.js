import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useDispatch } from 'react-redux'

const PostItem = ({ posts }) => {
	const dispatch = useDispatch()
	const like = (id) => {
		console.log(id)
	}
	const unlike = (id) => {
		console.log(id)
	}
	return (
		<>
			{posts?.map(
				({ _id, user, name, text, avatar, likes, comments, date }) => {
					return (
						<div key={_id} className='p-1 my-1 bg-white post'>
							<div>
								<Link to={`/profile/${user}`}>
									<img className='round-img' src={avatar} alt='avatar' />
									<h4>{name}</h4>
								</Link>
							</div>
							<div>
								<p className='my-1'>{text}</p>
								<Moment className='post-date' format='YYYY/MM/DD'>
									{date}
								</Moment>
								{/* likeButton */}
								<button
									onClick={() => {
										like(_id)
									}}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-thumbs-up'></i>
									<span>{likes.length > 0 && likes.length}</span>
								</button>
								{/* unlikeButton */}
								<button
									onClick={() => {
										unlike(_id)
									}}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-thumbs-down'></i>
								</button>

								<a href='!#' className='btn btn-primary'>
									Discussion{' '}
									<span className='comment-count'>{comments.length}</span>
								</a>
								{/* <button type='button' className='btn btn-danger'>
														<i className='fas fa-times'></i>
													</button> */}
							</div>
						</div>
					)
				},
			)}
		</>
	)
}

export default PostItem
