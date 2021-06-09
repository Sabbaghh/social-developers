import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteExperience } from '../redux/actions/profile'
import Moment from 'react-moment'
const Experience = () => {
	const experiences = useSelector((state) => state.profile.profile.experience)
	const dispatch = useDispatch()
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
				<tbody>
					{experiences.length > 0 &&
						experiences.map((exp) => {
							return (
								<tr key={exp._id}>
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
									<td
										className='btn btn-danger'
										onClick={() => {
											dispatch(deleteExperience(exp._id))
										}}
									>
										Delete
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</>
	)
}

export default Experience
