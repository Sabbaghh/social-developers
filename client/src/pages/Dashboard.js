import React, { useEffect } from 'react'
import { getProfile } from '../redux/actions/profile'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProfile())
	})

	return <div>Dashboard111</div>
}

export default Dashboard
