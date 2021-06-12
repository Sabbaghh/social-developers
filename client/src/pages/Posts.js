import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/actions/post'
import Loader from '../components/Loader'

import CreatePost from '../components/CreatePost'

import PostItem from '../components/PostItem'
const Posts = () => {
	const dispatch = useDispatch()
	const { posts, loading } = useSelector((state) => state.post)
	useEffect(() => {
		dispatch(getPosts())
	}, [dispatch])
	return (
		<>
			{loading ? (
				<Loader width='5rem' flex={true} />
			) : (
				<>
					<h1 className='large text-primary'>Posts</h1>
					<p className='lead'>
						<i className='fas fa-user'></i> Welcome to the community!
					</p>

					<CreatePost />

					<div className='posts'>
						{posts.length > 0 ? (
							<PostItem posts={posts} />
						) : (
							<h6 classNameName='text-dark'> There are no posts for now</h6>
						)}
						<div />
					</div>
				</>
			)}
		</>
	)
}

export default Posts
