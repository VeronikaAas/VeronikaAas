export default function Fireside() {
	return (
		<div className="bg-gradient-to-br from-pink-100 via-purple-50 to-violet-100 min-h-screen p-8 font-sans text-pink-800 relative overflow-hidden">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-extrabold mb-6 text-pink-600 drop-shadow-[0_0_6px_#f9a8d4] tracking-wide">
					🏕️ Fireside Holidaze
				</h1>

				<p className="mb-2 text-lg">This is our submission for the project exam in May 2025.</p>
				<p className="mb-2">I, Veronika Aas, collaborated with Madelen Sletteberg and Herman Hyllan on this project.</p>
				<p className="mb-6">We created an "AirBnB" for cozy cabins.</p>

				<img
					src="/projects/fireside.png"
					alt="Fireside Holidaze"
					className="rounded-xl border-4 border-pink-200 shadow-xl mx-auto mb-6"
				/>

				<p className="text-md mb-4 italic text-purple-700">🔧 Built with HTML, React and Tailwind</p>

				<p className="mb-4 text-purple-700">
					Welcome to Holidaze — where each getaway is handpicked to deliver the essence of slow living. 
					Think crackling fireplaces, cozy interiors, and snow-dusted pines just outside your window.
				</p>

				<p className="mb-4 text-purple-700">
					From serene forest hideaways to mountainside retreats, our collection invites you to pause, breathe, and rediscover
					the beauty of being still. At Holidaze, comfort isn't a feature — it's the entire experience.
				</p>

				<p className="mb-4 text-purple-700">
					This project is the frontend implementation of Holidaze, built on an existing backend API provided by Noroff.
					The API handles user management, venue listings, and booking functionality, while this frontend brings it to life
					with a cozy, responsive, and heartwarming design.
				</p>

				<p className="mt-6 text-lg">
					🔗 View the live site on{' '}
					<a
						href="https://fireside-holidaze.netlify.app/"
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
						href="https://github.com/maddipaddi/Fireside-Holidaze"
						className="text-pink-600 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</p>
			</div>

			{/* Decorative emojis for cuteness overload */}
			<div className="absolute top-8 left-6 text-pink-300 text-3xl animate-bounce">🌲</div>
			<div className="absolute bottom-12 right-10 text-purple-300 text-3xl animate-pulse">✨</div>
			<div className="absolute top-1/2 left-2 text-pink-300 text-2xl animate-pulse">🌸</div>
		</div>
	);
}
