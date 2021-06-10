import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createProfile, getProfile } from '../redux/actions/profile'
import { Link } from 'react-router-dom'

export const CreateProfile = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const { profile, loading } = useSelector((state) => state.profile)
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: '',
	})
	const [ToggleSocialMediaInputs, setToggleSocialMediaInputs] = useState(false)
	useEffect(() => {
		dispatch(getProfile())
		if (profile && !loading) {
			setFormData({
				company: profile.company ? profile.company : '',
				website: profile.website ? profile.website : '',
				location: profile.location ? profile.location : '',
				status: profile.status ? profile.status : '',
				skills: profile.skills ? profile.skills.join(',') : '',
				githubusername: profile.githubusername ? profile.githubusername : '',
				bio: profile.bio ? profile.bio : '',
				twitter: profile.twitter ? profile.twitter : '',
				facebook: profile.facebook ? profile.facebook : '',
				linkedin: profile.linkedin ? profile.linkedin : '',
				youtube: profile.youtube ? profile.youtube : '',
				instagram: profile.instagram ? profile.instagram : '',
			})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading, dispatch])

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value })
	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(createProfile(formData, history, profile ? true : false))
	}
	return (
		<>
			<h1 className='large text-primary'>Create Your Profile</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Let's get some information to make your
				profile stand out
			</p>
			<small>* = required field</small>
			<form className='form' onSubmit={(e) => onSubmit(e)}>
				<div className='form-group'>
					<label>Status</label>
					<select
						name='status'
						value={formData.status}
						onChange={(e) => onChange(e)}
					>
						<option value='0'>* Select Professional Status</option>
						<option value='Developer'>Developer</option>
						<option value='Junior Developer'>Junior Developer</option>
						<option value='Senior Developer'>Senior Developer</option>
						<option value='Manager'>Manager</option>
						<option value='Student or Learning'>Student or Learning</option>
						<option value='Instructor'>Instructor or Teacher</option>
						<option value='Intern'>Intern</option>
						<option value='Other'>Other</option>
					</select>
					<small className='form-text'>
						Give us an idea of where you are at in your career
					</small>
				</div>
				<div className='form-group'>
					<label>Company</label>
					<input
						type='text'
						placeholder='Company'
						name='company'
						value={formData.company}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						Could be your own company or one you work for
					</small>
				</div>
				<div className='form-group'>
					<label>Webiste</label>
					<input
						type='text'
						placeholder='Website'
						name='website'
						value={formData.website}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						Could be your own or a company website
					</small>
				</div>
				<div className='form-group'>
					<label>Location</label>
					<input
						type='text'
						placeholder='Location'
						name='location'
						value={formData.location}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						City & state suggested (eg. Boston, MA)
					</small>
				</div>
				<div className='form-group'>
					<label>Skills</label>
					<input
						type='text'
						placeholder='* Skills'
						name='skills'
						value={formData.skills}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
					</small>
				</div>
				<div className='form-group'>
					<label>Github Username</label>
					<input
						type='text'
						placeholder='Github Username'
						name='githubusername'
						value={formData.githubusername}
						onChange={(e) => onChange(e)}
					/>
					<small className='form-text'>
						If you want your latest repos and a Github link, include your
						username
					</small>
				</div>
				<div className='form-group'>
					<label>Bio</label>
					<textarea
						placeholder='A short bio of yourself'
						name='bio'
						value={formData.bio}
						onChange={(e) => onChange(e)}
					></textarea>
					<small className='form-text'>Tell us a little about yourself</small>
				</div>

				<div className='my-2'>
					<button
						onClick={() => setToggleSocialMediaInputs((prev) => !prev)}
						type='button'
						className='btn btn-light'
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>
				{ToggleSocialMediaInputs && (
					<>
						<div className='form-group social-input'>
							<i className='fab fa-twitter fa-2x'></i>
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={formData.twitter}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x'></i>
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={formData.facebook}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x'></i>
							<input
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={formData.youtube}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-linkedin fa-2x'></i>
							<input
								type='text'
								placeholder='Linkedin URL'
								name='linkedin'
								value={formData.linkedin}
								onChange={(e) => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x'></i>
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={formData.instagram}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</>
				)}

				<input
					type='submit'
					value={profile ? 'SAVE CHANGES' : 'SUBMIT'}
					className='my-1 btn btn-primary'
				/>
				<Link className='my-1 btn btn-light' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</>
	)
}

export default CreateProfile
