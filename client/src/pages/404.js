import React from 'react'
import NavBar from '../components/NavBar'

export const NotFound = () => {
	return (
		<div>
			<NavBar />
			<section className='container'>
				<h1 className='text-center text-dark'>Page Not Found!</h1>
			</section>
		</div>
	)
}

export default NotFound
