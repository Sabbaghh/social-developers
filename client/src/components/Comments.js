import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const Comments = ({ comment }) => {
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
			</div>
		</>
	)
}

export default Comments
