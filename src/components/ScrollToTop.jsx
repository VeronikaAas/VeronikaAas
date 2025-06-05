import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component automatically scrolls the window to the top
 * whenever the route changes.
 *
 * Useful in single-page applications (SPAs) to prevent users from landing
 * mid-page when navigating between routes.
 *
 * @component
 * @example
 */

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
