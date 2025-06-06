import { Outlet, Link } from 'react-router-dom';
import GothCursor from '../components/GothCursor';

/**
 * DesignTwo is a layout wrapper for the "Goth mode" theme.
 *
 * It includes the GothCursor trail effect, a themed header, and navigation.
 * Nested routes are rendered via <Outlet />.
 *
 * @component
 * @example
 */

export default function DesignTwo() {
	return (
		<div className="bg-neutral-900 min-h-screen text-red-900">
			<GothCursor />
			<header className="bg-neutral-900 p-4">
				<h1 className="text-2xl font-bold">Goth mode</h1>
				<nav className="mt-2">
					<Link to="/two" className="mr-4 underline">
						Home
					</Link>
					<Link to="/" className="underline">
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
