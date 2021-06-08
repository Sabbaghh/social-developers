import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddExperiences } from '../redux/actions/profile'

const AddExperience = () => {
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		title: '',
		company: '',
		location: '',
		current: true,
		from: '',
		to: '',
		description: '',
	})
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })
	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(AddExperiences(formData))
		console.log(formData)
	}
	return (
		<>
			<h1 className='large text-primary'>Add An Experience</h1>
			<p className='lead'>
				<i className='fas fa-code-branch'></i> Add any developer/programming
				positions that you have had in the past
			</p>
			<small>* = required field</small>
			<form onSubmit={(e) => onSubmit(e)} className='form'>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* Job Title'
						name='title'
						required
						value={formData.title}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* Company'
						name='company'
						value={formData.company}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={formData.location}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<h4>From Date</h4>
					<input
						type='date'
						name='from'
						value={formData.from}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<p>
						<input
							type='checkbox'
							name='current'
							value=''
							checked={formData.current}
							onChange={() =>
								setFormData({ ...formData, current: !formData.current })
							}
						/>{' '}
						Current Job
					</p>
				</div>
				{!formData.current && (
					<>
						<div className='form-group'>
							<h4>To Date</h4>
							<input
								type='date'
								name='to'
								value={formData.to}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</>
				)}
				<div className='form-group'>
					<textarea
						name='description'
						cols='30'
						rows='5'
						placeholder='Job Description'
						value={formData.description}
						onChange={(e) => onChange(e)}
					></textarea>
				</div>
				<input type='submit' className='btn btn-primary my-1' />
				<a className='btn btn-light my-1' href='dashboard.html'>
					Go Back
				</a>
			</form>
		</>
	)
}

export default AddExperience
