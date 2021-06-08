import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOutUser } from '../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'

const NavBar = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
	const loading = useSelector((state) => state.auth.loading)
	const dispatch = useDispatch()
	return (
		<nav className='navbar bg-dark'>
			<h1>
				<NavLink activeClassName='nav-active' to='/'>
					<i className='fas fa-code'></i> DevConnector
				</NavLink>
				{loading && <Loader />}
			</h1>
			<ul>
				<li>
					<NavLink to='/profiles'>Developers</NavLink>
				</li>
				{!isAuthenticated ? (
					<>
						<li>
							<NavLink activeClassName='nav-active' to='/register'>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink activeClassName='nav-active' to='/login'>
								Login
							</NavLink>
						</li>
					</>
				) : (
					<>
						<li>
							<NavLink activeClassName='nav-active' to='/dashboard'>
<<<<<<< HEAD
								<i className='fa fa-user ' /> {` `}
								<span className='hide-sm'>Dashboard</span>
=======
								Dashboard
>>>>>>> ed9bc35 ( initalize logout finctionality)
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName='nav-active'
								to='/'
								onClick={() => dispatch(logOutUser())}
							>
								<i className='fas fa-sign-out-alt'></i>
								{` `}
								<span className='hide-sm'>sign out</span>
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default NavBar
