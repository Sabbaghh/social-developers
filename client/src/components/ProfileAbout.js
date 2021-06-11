import React from 'react'

const ProfileAbout = ({ bio, skills = [], name }) => {
	return (
		<div className='profile-about bg-light p-2'>
			<h2 className='text-primary'>{name.trim().split(' ')[0]}'s</h2>
			<p>{bio ? bio : 'No Bio provided yet'}</p>
			<div className='line'></div>
			<h2 className='text-primary'>Skill Set</h2>
			{skills.length > 0 && (
				<div className='skills'>
					{skills.map((skill) => {
						return (
							<div className='p-1'>
								<i className='fa fa-check'></i> {skill}
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default ProfileAbout
