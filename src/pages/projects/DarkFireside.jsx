import React, { useEffect } from 'react';

export default function DarkFireside() {
	useEffect(() => {
			document.title = 'Fireside Holidaze | VA';
		}, []);
	return (
		<div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black min-h-screen p-8 text-red-100 font-mono relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold mb-6 text-red-500 drop-shadow-[0_0_8px_#7f1d1d] tracking-wide">
					🔥 Fireside Holidaze
				</h1>

				<p className="mb-2 text-lg text-gray-300">This is our submission for the project exam in May 2025.</p>
				<p className="mb-2 text-gray-300">
					I, <strong className="text-red-300">Veronika Aas</strong>, collaborated with{' '}
					<strong className="text-red-300">Madelen Sletteberg</strong> and{' '}
					<strong className="text-red-300">Herman Hyllan</strong> on this project.
				</p>
				<p className="mb-6 text-gray-300">We created a cozy, Nordic-style “AirBnB” platform for cabins.</p>

				<img
					src="/projects/fireside.png"
					alt="Fireside Holidaze"
					className="rounded-xl border-4 border-red-700 shadow-lg mx-auto mb-6"
				/>

				<p className="text-md mb-4 text-red-200 italic">🛠 Built with React, Tailwind & HTML</p>

				<p className="mb-4 text-gray-300">
					Welcome to Holidaze — each getaway is handpicked to deliver the essence of *slow living* — think crackling fireplaces, cozy interiors, and snow-dusted pines just outside your window.
				</p>

				<p className="mb-6 text-gray-400">
					From serene forest hideaways to mountainside retreats, our collection invites you to pause, breathe, and rediscover the beauty of being still.
					Comfort isn't just a feature — it's the entire experience.
				</p>

				<p className="mb-6 text-gray-400">
					This project is the frontend implementation of Holidaze, built on an existing backend API provided by Noroff.
					It handles users, venues, and bookings — while this frontend wraps it all in a rich, responsive, and emotionally warm UI.
				</p>

				<p className="mt-6 text-lg">
					🔗 View it live on{' '}
					<a
						href="https://fireside-holidaze.netlify.app/"
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
						href="https://github.com/maddipaddi/Fireside-Holidaze"
						className="text-red-400 hover:text-white underline transition"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>
			</div>

			{/* Atmospheric Gothic Deco */}
			<div className="absolute top-12 left-8 text-red-800 text-3xl animate-pulse">🕯</div>
			<div className="absolute bottom-12 right-10 text-red-700 text-2xl animate-bounce">🕯</div>
			<div className="absolute top-1/2 left-4 text-red-600 text-xl animate-bounce">✥</div>
		</div>
	);
}