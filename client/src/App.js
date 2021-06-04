import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Alert from './components/Alert'
const App = () => {
	return (
		<Router>
			<Switch>
				<Layout>
					<Route path='/' exact component={Landing} />
					<section className='container'>
						<Alert />
						<Route path='/login' exact component={Login} />
						<Route path='/Register' exact component={Register} />
					</section>
				</Layout>
			</Switch>
		</Router>
	)
}

export default App
