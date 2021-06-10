import React from 'react'
import { Link } from 'react-router-dom'

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		company,
		location,
		skills,
	},
}) => {
	return (
		<div className='profile bg-light'>
			<img className='round-img' src={avatar} alt='avatar' />
			<div>
				<h2>{name}</h2>
				<p>
					{status} - {company ? company : ' '}
				</p>
				<p className='my-1'>{location ? location : ' '}</p>
				<Link to={`/profile/${_id}`} className='btn btn-primary'>
					View Profile
				</Link>
			</div>
			<ul>
				{skills.slice(0, 4).map((skill, i) => {
					return (
						<li key={i} className='text-primary'>
							<i className='fas fa-check' /> {` `} {skill}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ProfileItem
