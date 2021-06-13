import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'

const Landing = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	if (isAuthenticated) {
		return <Redirect to='/dashboard' />
	}
	return (
		<>
			<section className='landing'>
				<NavBar />
				<div className='dark-overlay'>
					<div className='landing-inner'>
						<h1 className='x-large'>Developer Connector</h1>
						<p className='lead'>
							Create a developer profile/portfolio, share posts and get help
							from other developers
						</p>
						{!isAuthenticated ? (
							<div className='buttons'>
								<Link to='./register' className='btn btn-primary'>
									Sign Up
								</Link>
								<Link to='./login' className='btn btn-light'>
									Login
								</Link>
							</div>
						) : (
							<div className='buttons'>
								<Link to='./dashboard' className='btn btn-primary'>
									GO TO DASHBOARD
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	)
}

export default Landing
