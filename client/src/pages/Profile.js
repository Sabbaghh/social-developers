import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import ProfileTop from '../components/ProfileTop'
import { getProfilesByID } from '../redux/actions/profile'

const Profile = ({ match }) => {
	const dispatch = useDispatch()
	const { profile, loading } = useSelector((state) => state.profile)
	const auth = useSelector((state) => state.auth)

	//this constant contains the condition if the user owns the profile or not
	const userOwnsProfile =
		auth?.isAuthenticated &&
		!auth?.loading &&
		auth?.user._id === profile?.user._id

	//---
	useEffect(() => {
		dispatch(getProfilesByID(match.params.id))
	}, [dispatch, match.params.id])
	return (
		<>
			{loading || !profile ? (
				<Loader width='5rem' flex={true} />
			) : (
				<>
					<>
						{userOwnsProfile && (
							<>
								<Link to='/create-profile' className='btn btn-primary'>
									Edit Profile
								</Link>
								<Link to='/Dashboard' className='btn btn-dark'>
									Dashboard
								</Link>
							</>
						)}
						<Link to='/profiles' className='btn btn-light'>
							BACK
						</Link>
					</>
					<div className='my-1 profile-grid'>
						<ProfileTop
							social={profile.social}
							website={profile.website}
							avatar={profile.user.avatar}
							name={profile.user.name}
							status={profile.status}
							company={profile.company}
							location={profile.location}
						/>
					</div>
				</>
			)}
		</>
	)
}

export default Profile
