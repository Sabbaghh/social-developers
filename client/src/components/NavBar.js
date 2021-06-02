import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<nav class='navbar bg-dark'>
			<h1>
				<NavLink to='./'>
					<i class='fas fa-code'></i> DevConnector
				</NavLink>
			</h1>
			<ul>
				<li>
					<NavLink to='./profiles'>Developers</NavLink>
				</li>
				<li>
					<NavLink to='./register'>Register</NavLink>
				</li>
				<li>
					<NavLink to='./login'>Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
