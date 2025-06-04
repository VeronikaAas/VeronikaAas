export default function Auction() {
	return (
		<div className="bg-gradient-to-br from-pink-100 via-purple-50 to-violet-100 min-h-screen p-8 font-sans text-pink-800 relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold mb-6 text-pink-600 drop-shadow-[0_0_6px_#f9a8d4] tracking-wide">
					💎 Auction House
				</h1>

				<p className="mb-2 text-lg">This is our submission for the semester assignment in December 2024.</p>
				<p className="mb-2">I, Veronika Aas, collaborated with Madelen Sletteberg on this project.</p>
				<p className="mb-6">We created an Auction House for luxury handbags, watches, and bags.</p>

				<img
					src="/projects/auction-house.png"
					alt="Auction House"
					className="rounded-xl border-4 border-pink-200 shadow-xl mx-auto mb-6"
				/>

				<p className="text-md mb-4 italic text-purple-700">✨ Built with HTML, JavaScript and Tailwind</p>

				<p className="mb-4 text-purple-700">
					Auction House is an exclusive platform for buying and selling luxury items, specializing in watches, handbags,
					bags, and jewelry. Our mission is to create a refined, user-friendly experience that matches the elegance of the
					products featured on our platform.
				</p>

				<p className="mb-4 text-purple-700">
					This project is the frontend implementation of Auction House, built on an existing backend API provided by Noroff.
					The API handles user management, auction listings, and bidding functionality, while this frontend brings the
					user interface to life with a luxurious, responsive, and sparkly design.
				</p>

				<p className="mt-6 text-lg">
					🔗 View the live site on{' '}
					<a
						href="https://luxauctionhouse.netlify.app/"
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
						href="https://github.com/maddipaddi/FED2-semester-project-2"
						className="text-pink-600 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>
			</div>

			{/* Decorative emojis for cuteness overload */}
			<div className="absolute top-8 left-6 text-pink-300 text-3xl animate-bounce">💖</div>
			<div className="absolute bottom-12 right-10 text-purple-300 text-3xl animate-pulse">🧁</div>
			<div className="absolute top-1/2 left-2 text-pink-300 text-2xl animate-pulse">🌸</div>
		</div>
	);
}
