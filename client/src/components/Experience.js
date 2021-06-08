import React from 'react'
import { useSelector } from 'react-redux'
import Moment from 'react-moment'
const Experience = () => {
	const experiences = useSelector((state) => state.profile.profile.experience)
	return (
		<>
			<h2 className='my-2'> Experience informations</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>Company</th>
						<th className='hide-sm'>Title</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>

				{experiences.length > 0 &&
					experiences.map((exp) => {
						return (
							<tbody key={exp._id}>
								<td>{exp.company}</td>
								<td>{exp.title}</td>
								<td className='hide-sm'>
									<Moment format='YYYY/MM/DD'>{exp.from}</Moment>
									{exp.to ? (
										<>
											- <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
										</>
									) : (
										' - Now'
									)}
								</td>
								<td className='btn btn-danger'>Delete</td>
							</tbody>
						)
					})}
			</table>
		</>
	)
}

export default Experience
