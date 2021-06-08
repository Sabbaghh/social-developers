import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../redux/actions/alert'
import { registerNewUser } from '../redux/actions/auth'

const Register = () => {
	const dispatch = useDispatch()

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})
	const { name, email, password, password2 } = formData
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })
	const onSubmit = async (e) => {
		e.preventDefault()
		if (password !== password2) {
			dispatch(setAlert(`passowrds don't match`, 'danger'))
		} else {
			dispatch(registerNewUser(name, email, password))
		}
	}
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	// redirect if logged in
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />
	}
	return (
		<>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Create Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						vlaue={name}
						onChange={(e) => onChange(e)}
						type='text'
						placeholder='Name'
						name='name'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						vlaue={email}
						onChange={(e) => onChange(e)}
						type='email'
						placeholder='Email Address'
						name='email'
						required
					/>
					<small className='form-text'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className='form-group'>
					<input
						vlaue={password}
						onChange={(e) => onChange(e)}
						type='password'
						placeholder='Password'
						name='password'
						minLength='6'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						minLength='6'
						vlaue={password2}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Register' />
			</form>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</>
	)
}

export default Register
