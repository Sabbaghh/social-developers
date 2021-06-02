import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
	return (
		<Router>
			<Layout>
				<Route path='/' exact component={Landing} />

				<section className='container'>
					<Switch>
						<Route path='/login' exact component={Login} />
						<Route path='/Register' exact component={Register} />
					</Switch>
				</section>
			</Layout>
		</Router>
	)
}

export default App
