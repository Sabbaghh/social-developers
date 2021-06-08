import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import setAuthToken from './utlis/setAuthToken'
import { loadUser } from './redux/actions/auth'
import { useDispatch } from 'react-redux'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import AddEducation from './pages/AddEducation'
import AddExperience from './pages/AddExperience'
import Alert from './components/Alert'
import CreateProfile from './pages/CreateProfile'

//redux
import { useSelector } from 'react-redux'

const App = () => {
	const { isAuthenticated, loading } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	if (localStorage.token) {
		setAuthToken(localStorage.token)
	}
	useEffect(() => {
		dispatch(loadUser())
	}, [dispatch])
	return (
		<Router>
			<Switch>
				<Layout>
					<Route path='/' exact component={Landing} />
					<section className='container'>
						<Alert />
						<Route path='/login' component={Login} />
						<Route path='/Register' component={Register} />
						<PrivateRoute
							exact
							path='/Dashboard'
							component={Dashboard}
							condition={!isAuthenticated && !loading}
							redirect='/login'
						/>
						<PrivateRoute
							exact
							path='/create-profile'
							component={CreateProfile}
							condition={!isAuthenticated && !loading}
							redirect='/Dashboard'
						/>
						<PrivateRoute
							exact
							path='/add-education'
							component={AddEducation}
							condition={!isAuthenticated && !loading}
							redirect='/Dashboard'
						/>
						<PrivateRoute
							exact
							path='/add-experience'
							component={AddExperience}
							condition={!isAuthenticated && !loading}
							redirect='/Dashboard'
						/>
					</section>
				</Layout>
			</Switch>
		</Router>
	)
}

export default App
