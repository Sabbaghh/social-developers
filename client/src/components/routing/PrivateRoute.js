import React from 'react'
import { Redirect, Route } from 'react-router-dom'
const PrivateRoute = ({
	component: Component,
	redirect,
	condition,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return condition ? <Redirect to={redirect} /> : <Component {...props} />
			}}
		/>
	)
}

export default PrivateRoute
