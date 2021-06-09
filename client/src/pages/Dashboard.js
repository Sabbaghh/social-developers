import React, { useEffect } from 'react'
import { getProfile } from '../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardActions from '../components/DashboardActions'
import Experience from './../components/Experience'
import Loader from '../components/Loader'
import Education from './../components/Education'
import { deleteUser } from '../redux/actions/profile'

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
							<Education />
							<Experience />
							<div className='my-2'>
								<button
									className='btn btn-danger'
									onClick={() => {
										dispatch(deleteUser())
									}}
								>
									<i className='fas fa-user-minus' /> {` `}
									DELETE MY ACCOUNT
								</button>
							</div>
						</>
					) : (
						<>
							<h2 className='larger text-primary'>
								You have not yet setup a profile , Please add some info
							</h2>
							<Link to='/create-profile' className='my-1 btn btn-primary'>
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
