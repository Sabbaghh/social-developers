import React from 'react'
<<<<<<< HEAD
import Spinner from '../img/spinner.gif'

const Loader = ({ width, flex }) => {
	return (
		<div
			style={{
				display: `${flex ? 'flex' : 'inline-block'}`,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			className='loader'
		>
			{
				<img
					style={{ width: `${width ? width : '1rem'}` }}
					src={Spinner}
					alt='loading..'
				/>
			}
		</div>
	)
=======
import './styles/loader.css'

const Loader = () => {
	return <div class='loader'>Loading...</div>
>>>>>>> ed9bc35 ( initalize logout finctionality)
}

export default Loader
