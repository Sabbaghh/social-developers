import React from 'react'
import Moment from 'react-moment'
const ProrfileExperience = ({ experiences = [] }) => {
	return (
		<>
			<div className='profile-exp bg-white p-2'>
				<h2 className='text-primary'>Experience</h2>
				{experiences.length > 0 ? (
					<>
						{experiences.map(
							({ title, from, to, company, location, _id, description }) => {
								return (
									<div key={_id}>
										<h3 className='text-dark'>{company}</h3>
										<p>
											<Moment format='YYYY/MM/DD'>{from}</Moment>
											{` `} - {` `}
											{to ? <Moment format='YYYY/MM/DD'>{to}</Moment> : 'Now'}
										</p>
										<p>
											<strong>Position: </strong>
											{title}
										</p>
										{location && (
											<p>
												<strong>Location: </strong>
												{location}
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
					<h6 class=' text-dark'>NO EXPERIENCES ARE PROVIDED YET.</h6>
				)}
			</div>
		</>
	)
}

export default ProrfileExperience
