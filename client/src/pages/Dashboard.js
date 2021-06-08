import React, { useEffect } from 'react'
import { getProfile } from '../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardActions from '../components/DashboardActions'
import Loader from '../components/Loader'

const Dashboard = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getProfile())
	}, [dispatch])
	const { loading, profile } = useSelector((state) => state.profile)
	const { user } = useSelector((state) => state.auth)
	return (
		<div>
			{/* loads a spinner when it's loading */}
			{loading ? (
				<Loader width='5rem' flex={true} />
			) : (
				<>
					<h1 className='larger text-primary'>Dashboard</h1>
					<p className='lead'>
						<i className='fas fa-user' />
						{` `} Welcome {user && user.name}
					</p>

					{profile ? (
						<>
							<DashboardActions />
						</>
					) : (
						<>
							<h2 className='larger text-primary'>
								You have not yet setup a profile , Please add some info
							</h2>
							<Link to='/create-profile' className='btn btn-primary my-1'>
								Create Profile
							</Link>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default Dashboard
