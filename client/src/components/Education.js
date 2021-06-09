import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment'
import { deleteEducation } from '../redux/actions/profile'
const Education = () => {
	const educations = useSelector((state) => state.profile.profile.education)
	const dispatch = useDispatch()
	return (
		<>
			<h2 className='my-2'> Education informations</h2>
			<table className='table'>
				<thead>
					<tr>
						<th>School</th>
						<th className='hide-sm'>degree</th>
						<th className='hide-sm'>Years</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{educations.length > 0 &&
						educations.map((exp) => {
							return (
								<tr key={exp._id}>
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
									<td
										className='btn btn-danger'
										onClick={() => {
											dispatch(deleteEducation(exp._id))
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

export default Education
