import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { test } from '../redux/actions'

const Login = () => {
	const LoginReducer = useSelector((state) => state.LoginReducer)
	const dispatch = useDispatch()
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })

	const onSubmit = async (e) => {
		e.preventDefault()
		console.log(formData)
	}
	return (
		<section className='container'>
			<div style={{ color: 'black' }}>
				<button onClick={() => dispatch(test())}>+</button>
				{LoginReducer}
			</div>
			<div className='alert alert-danger'>Invalid credentials</div>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Sign into Your Account
			</p>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						required
						value={email}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='my-1'>
				Don't have an account?<Link to='/register'>Register</Link>
			</p>
		</section>
	)
}

export default Login
