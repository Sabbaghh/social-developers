import React from 'react'
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
}

export default Loader
