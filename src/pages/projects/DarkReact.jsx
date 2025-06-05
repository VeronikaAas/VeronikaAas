import React, { useEffect } from 'react';

export default function DarkReact() {
	useEffect(() => {
		document.title = 'E-commerce shop | VA';
	}, []);
	return (
		<div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black min-h-screen p-8 text-red-100 font-mono relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold mb-6 text-red-500 drop-shadow-[0_0_8px_#7f1d1d] tracking-wide">
					🛒 JavaScript Framework - React
				</h1>

				<p className="mb-2 text-lg text-gray-300">
					This is my submission for the JavaScript Framework assignment, where I chose to dive into React.
				</p>
				<p className="mb-6 text-gray-300">I created a sleek and playful E-commerce shop as my project.</p>

				<img
					src="/projects/react.png"
					alt="React E-commerce Shop"
					className="rounded-xl border-4 border-red-700 shadow-lg mx-auto mb-6"
				/>

				<p className="text-md mb-4 text-red-200 italic">⚙️ Built with React, Tailwind, HTML, and Vite</p>

				<p className="mb-4 text-gray-300">
					This e-store was created as a personal exploration into React and its component-based architecture. I chose Vite as
					the build tool for its speed and popularity in modern workflows.
				</p>

				<p className="mb-4 text-gray-400">
					The project is the frontend implementation of an e-commerce platform, built on an existing backend API provided by
					Noroff. The API handles product data and pricing — this frontend brings it all to life with a clean, responsive,
					and stylish UI.
				</p>

				<p className="mb-6 text-gray-300">
					After delievering the project, I received feedback from my teacher, who suggested that I forgot to format the code
					properly. This is something I have worked on so my code now follows best practices and is more readable. 
					I also added some JSDocs to my code.
				</p>

				<p className="mt-6 text-lg">
					🔗 View the deployed site on{' '}
					<a
						href="https://reactviteca.netlify.app/"
						className="text-red-400 hover:text-white underline transition"
						target="_blank"
						rel="noopener noreferrer"
					>
						Netlify
					</a>
				</p>

				<p className="mt-2 text-lg">
					🔗 Explore the code on{' '}
					<a
						href="https://github.com/VeronikaAas/VReact"
						className="text-red-400 hover:text-white underline transition"
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
