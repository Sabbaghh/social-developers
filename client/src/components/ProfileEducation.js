import React from 'react'
import Moment from 'react-moment'

const ProfileEducation = ({ educations = [] }) => {
	return (
		<>
			<div className='p-2 bg-white profile-edu'>
				<h2 className='text-primary'>Education</h2>
				{educations.length > 0 ? (
					<>
						{educations.map(
							({
								school,
								degree,
								from,
								to,
								description,
								fieldofstudy,
								_id,
							}) => {
								return (
									<div key={_id}>
										<h3>{school}</h3>
										<p>
											<Moment format='YYYY/MM/DD'>{from}</Moment>
											{` `} - {` `}
											{to ? <Moment format='YYYY/MM/DD'>{to}</Moment> : 'Now'}
										</p>
										<p>
											<strong>Degree: </strong>
											{degree}
										</p>
										{fieldofstudy && (
											<p>
												<strong>Field Of Study: </strong>
												{fieldofstudy}
											</p>
										)}

										{description && (
											<p>
												<strong>Description: </strong>
												{description}
											</p>
										)}
									</div>
								)
							},
						)}
					</>
				) : (
					<h6 className=' text-dark'>NO EDUCATIONS ARE PROVIDED YET.</h6>
				)}
			</div>
		</>
	)
}

export default ProfileEducation
