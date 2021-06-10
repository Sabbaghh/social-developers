import React from 'react'

const ProfileTop = ({
	social = {},
	website = '',
	avatar,
	name,
	company,
	status,
	location,
}) => {
	const { youtube, instagram, linkedin, facebook, twitter } = social
	return (
		<div className='p-2 profile-top bg-primary'>
			<img className='my-1 round-img' src={avatar} alt='' />
			<h1 className='large'>{name}</h1>
			<p className='lead'>
				{status} at {company}
			</p>
			<p>{location}</p>
			<div className='my-1 icons'>
				{website && (
					<a href={website} target='_blank' rel='noopener noreferrer'>
						<i className='fas fa-globe fa-2x'></i>
					</a>
				)}

				{twitter && (
					<a
						href={`https://twitter.com/${twitter}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-twitter fa-2x'></i>
					</a>
				)}
				{facebook && (
					<a
						href={`https://web.facebook.com/${facebook}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-facebook fa-2x'></i>
					</a>
				)}
				{linkedin && (
					<a
						href={`https://www.linkedin.com/in/${linkedin}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-linkedin fa-2x'></i>
					</a>
				)}
				{youtube && (
					<a href={youtube} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-youtube fa-2x'></i>
					</a>
				)}
				{instagram && (
					<a
						href={`https://www.instagram.com/${instagram}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fab fa-instagram fa-2x'></i>
					</a>
				)}
			</div>
		</div>
	)
}

export default ProfileTop
