import React, { useEffect } from 'react';

export default function ReactProject() {
	useEffect(() => {
			document.title = 'E-commerce shop | VA';
		}, []);
	return (
		<div className="bg-gradient-to-br from-pink-100 via-purple-50 to-violet-100 min-h-screen p-8 font-sans text-pink-800 relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold mb-6 text-pink-600 drop-shadow-[0_0_6px_#f9a8d4] tracking-wide">
					🛍️ JavaScript Framework - React
				</h1>

				<p className="mb-2 text-lg">
					This is my submission for the JavaScript Framework assignment, where I chose to dive into React.
				</p>
				<p className="mb-6">I created a playful little E-commerce shop.</p>

				<img
					src="/projects/react.png"
					alt="JavaScript Framework - React"
					className="rounded-xl border-4 border-pink-200 shadow-xl mx-auto mb-6"
				/>

				<p className="text-md mb-4 italic text-purple-700">⚙️ Built with HTML, React and Tailwind</p>

				<p className="mb-4 text-purple-700">
					This E-store project was built as a learning experience to explore the React framework.
					I set up the project using Vite and React.
				</p>

				<p className="mb-4 text-purple-700">
					This frontend project connects to an API provided by Noroff that manages product listings and prices,
					while the interface brings it all to life with a responsive and user-friendly.
				</p>

				<p className="mt-6 text-lg">
					🔗 View the live site on{' '}
					<a
						href="https://reactviteca.netlify.app/"
						className="text-pink-600 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						Netlify
					</a>
				</p>

				<p className="mt-2 text-lg">
					🔗 Check out the code on{' '}
					<a
						href="https://github.com/VeronikaAas/VReact"
						className="text-pink-600 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>
			</div>
		</div>
	);
}
