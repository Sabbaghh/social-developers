import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { getProfiles } from '../redux/actions/profile'
import ProfileItem from './../components/ProfileItem'

const Profile = () => {
	const dispatch = useDispatch()
	const { profiles, loading } = useSelector((state) => state.profile)
	useEffect(() => {
		dispatch(getProfiles())
	}, [dispatch])
	return (
		<>
			{loading ? (
				<Loader width='5rem' flex={true} />
			) : (
				<>
					<h1 className='large text-primary'> Developers</h1>
					<p className='lead'>
						<i className='fab fa-connectdevelop' />
						{` `} Browse and connect with developers
					</p>
					<div className='profiles'>
						{profiles.length > 0 ? (
							<>
								{profiles.map((pro) => {
									return <ProfileItem key={pro._id} profile={pro} />
								})}
							</>
						) : (
							<div>No profiles found ...</div>
						)}
					</div>
				</>
			)}
		</>
	)
}

export default Profile
