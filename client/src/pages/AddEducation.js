import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddEducations } from '../redux/actions/profile'
import { useHistory } from 'react-router-dom'

const AddEducation = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		current: true,
		from: '',
		to: '',
		description: '',
	})
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })
	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(AddEducations(formData, history))
		console.log(formData)
	}
	return (
		<>
			<h1 className='large text-primary'>Add Your Education</h1>
			<p className='lead'>
				<i className='fas fa-graduation-cap'></i> Add any school, bootcamp, etc
				that you have attended
			</p>
			<small>* = required field</small>
			<form onSubmit={(e) => onSubmit(e)} className='form'>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* School or Bootcamp'
						name='school'
						required
						value={formData.school}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='* Degree or Certificate'
						name='degree'
						required
						value={formData.degree}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Field Of Study'
						name='fieldofstudy'
						value={formData.fieldofstudy}
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
							onChange={() => {
								setFormData({ ...formData, current: !formData.current })
							}}
							checked={formData.current}
						/>{' '}
						Current School or Bootcamp
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
						placeholder='Program Description'
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

export default AddEducation
