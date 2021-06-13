import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../components/Comments'
import CreateComment from '../components/CreateComment'
import { getPostByID } from '../redux/actions/post'
import Loader from '../components/Loader'
const Post = ({ match }) => {
	const dispatch = useDispatch()
	const { post, loading } = useSelector((state) => state.post)
	useEffect(() => {
		dispatch(getPostByID(match.params.id))
	}, [dispatch, match.params.id])
	return (
		<>
			{loading ? (
				<Loader width='5rem' flex={true} />
			) : (
				<>
					{post ? (
						<>
							<Link to='/posts' className='btn'>
								Back To Posts
							</Link>
							<div className='p-1 my-1 bg-white post'>
								<div>
									<Link to={`/profile/${post.user}`}>
										<img className='round-img' src={post.avatar} alt='avatar' />
										<h4>{post.name}</h4>
									</Link>
								</div>
								<div>
									<p className='my-1'>{post.text}</p>
								</div>
							</div>
							<CreateComment postId={post._id} />
							<div className='comments'>
								{post?.comments.length > 0 ? (
									post.comments.map((comment) => {
										return (
											<Comments
												key={comment._id}
												postID={post._id}
												comment={comment}
											/>
										)
									})
								) : (
									<h6 className='text-dark'>there are no comments for now</h6>
								)}
							</div>
						</>
					) : (
						<h6 className='text-dark'>There's no post to show</h6>
					)}
				</>
			)}
		</>
	)
}

export default Post
