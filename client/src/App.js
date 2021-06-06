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
import Alert from './components/Alert'
const App = () => {
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
						<PrivateRoute exact path='/Dashboard' component={Dashboard} />
					</section>
				</Layout>
			</Switch>
		</Router>
	)
}

export default App
