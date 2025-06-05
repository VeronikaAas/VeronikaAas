import { Outlet, Link } from 'react-router-dom';
import SparkleCursor from '../components/SparklingCursor';

/**
 * DesignOne is a layout wrapper for the "Cute mode" theme.
 *
 * It includes the SparkleCursor effect, a themed header, and navigation.
 * Nested routes are rendered via <Outlet />.
 *
 * @component
 * @example
 */

export default function DesignOne() {
	return (
		<div className="bg-pink-50 min-h-screen text-purple-800 relative">
			<SparkleCursor />

			<header className="bg-pink-50 p-4">
				<h1 className="text-2xl font-bold">Cute mode</h1>
				<nav className="mt-2">
					<Link to="/one" className="mr-4 underline">
						Home
					</Link>
					<Link to="/" className="underline ml-4">
						Change mode
					</Link>
				</nav>
			</header>

			<main className="p-6">
				<Outlet />
			</main>
		</div>
	);
}
