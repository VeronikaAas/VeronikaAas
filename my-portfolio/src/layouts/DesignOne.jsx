import { Outlet, Link } from 'react-router-dom';

export default function DesignOne() {
	return (
		<div className="bg-blue-50 min-h-screen text-blue-900">
			<header className="bg-blue-200 p-4 shadow">
				<h1 className="text-2xl font-bold">Design One Layout</h1>
				<nav className="mt-2">
					<Link to="/one" className="mr-4 underline">
						Hjem
					</Link>
					<Link to="/" className="underline">
						Tilbake til landing
					</Link>
				</nav>
			</header>
			<main className="p-6">
				<Outlet />
			</main>
		</div>
	);
}
