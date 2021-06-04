import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
	const alerts = useSelector((state) => state.alert)
	const alertCondition = alerts !== null && alerts.length > 0

	return (
		<>
			{alertCondition &&
				alerts.map(({ msg, id, alertType }) => {
					return (
						<div className={`alert alert-${alertType}`} key={id}>
							{msg}
						</div>
					)
				})}
		</>
	)
}

export default Alert
