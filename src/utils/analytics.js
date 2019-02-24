import React from 'react'
import { globalHistory } from '@reach/router'
import GoogleAnalytics from "react-ga";

export default GoogleAnalytics;

function useLocation() {
	const initialRouteData = {
		location: globalHistory.location,
		navigate: globalHistory.navigate
	}

	const [routeData, setRouteData] = React.useState(initialRouteData);
	React.useEffect(() => {
		const removeListener = globalHistory.listen(history => {
			setRouteData({ ...routeData, location: history.location });
		});
		return function cleanup() {
			removeListener();
		};
	}, []);
	return routeData;
}

export function useGoogleAnalytics({ trackingId }) {
	const { location } = useLocation();
	const page = location.pathname;

	// Initialise Google Analytics on first render.
	React.useEffect(() => {
		GoogleAnalytics.initialize(trackingId);
	}, []);

	// Send a pageview event when the pathname is updated.
	React.useEffect(() => {
		GoogleAnalytics.set({ page });
		GoogleAnalytics.pageview(page);
	}, [page])
}
