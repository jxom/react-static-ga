import React from 'react'
import { withSiteData } from 'react-static'
import GoogleAnalytics from '../utils/analytics';

export default withSiteData(() => {
	function handleClick() {
		GoogleAnalytics.event({ category: 'Home', action: 'Click button' })
	}

	return (
		<div style={{ textAlign: 'center' }}>
			<h1>Welcome to React-Static</h1>
			<button onClick={handleClick}>Click to log event</button>
		</div>
	)
})
