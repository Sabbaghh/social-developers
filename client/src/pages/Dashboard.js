import React, { useEffect } from 'react'
import { getProfile } from '../redux/actions/profile'
import { useDispatch } from 'react-redux'
import Loader from '../components/Loader'

const Dashboard = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProfile())
	})

	return (
		<div>
			<Loader width='5rem' flex={true} />
		</div>
	)
}

export default Dashboard
