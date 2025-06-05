import React, { useEffect } from 'react';

export default function DarkAuction() {
	useEffect(() => {
		document.title = 'Auction House | VA';
	}, []);
	return (
		<div className="bg-gradient-to-br from-neutral-700 via-neutral-800 to-black min-h-screen p-8 text-red-100 font-mono relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold mb-6 text-red-500 drop-shadow-[0_0_8px_#7f1d1d] tracking-wide">
					☠ Auction House
				</h1>

				<p className="mb-2 text-lg text-gray-300">This is our submission for the semester assignment in December 2024.</p>
				<p className="mb-2 text-gray-300">
					I, <strong className="text-red-300">Veronika Aas</strong>, collaborated with{' '}
					<strong className="text-red-300">Madelen Sletteberg</strong> on this project.
				</p>
				<p className="mb-6 text-gray-300">
					We created a dark-themed Auction House for luxury handbags, watches, and accessories.
				</p>

				<img
					src="/projects/auction-house.png"
					alt="Auction House"
					className="rounded-xl border-4 border-red-700 shadow-lg mx-auto mb-6"
				/>

				<p className="text-md mb-4 text-red-200 italic">⚙️ Built with HTML, JavaScript & Tailwind CSS</p>

				<p className="mb-4 text-gray-300">
					Auction House is an exclusive platform for buying and selling luxury items — with a gothic twist. It specializes in
					watches, handbags, and jewelry for those who prefer elegance... with shadows.
				</p>

				<p className="mb-6 text-gray-400">
					The project is a frontend implementation built on top of the Noroff-provided API, which handles users, listings,
					and bids — while this interface brings it to life with sharp edges, dark gradients, and red glows.
				</p>

				<p className="mt-6 text-lg">
					🔗 View it live on{' '}
					<a
						href="https://luxauctionhouse.netlify.app/"
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
						href="https://github.com/maddipaddi/FED2-semester-project-2"
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
