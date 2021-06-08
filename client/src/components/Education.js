import React from 'react'
import { useSelector } from 'react-redux'
import Moment from 'react-moment'
const Education = () => {
	const educations = useSelector((state) => state.profile.profile.education)
	return (
		<>
			<h2 className='my-2'> Experience informations</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>School</th>
						<th className='hide-sm'>degree</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>

				{educations.length > 0 &&
					educations.map((exp) => {
						return (
							<tbody key={exp._id}>
								<td>{exp.school}</td>
								<td>{exp.degree}</td>
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

export default Education
