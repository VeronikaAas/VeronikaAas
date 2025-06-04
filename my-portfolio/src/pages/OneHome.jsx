import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const characters = [
	{
		name: 'Book nerd',
		img: '/characters/char_book.png',
		description: 'A shy enchantress who conjures code from ancient tomes under moonlight.',
	},
	{
		name: 'Dog lover',
		img: '/characters/char_dogs.png',
		description: 'A cheerful sprite who crafts websites while surrounded by loyal pups.',
	},
	{
		name: 'Explorer',
		img: '/characters/char_trav.png',
		description: 'A pixel nomad who maps magical lands and discovers hidden bugs.',
	},
	{
		name: 'Workout junkie',
		img: '/characters/char_work.png',
		description: 'A strong-hearted bunny who boosts websites with every enchanted jump squat.',
	},
	{
		name: 'Bakery girl',
		img: '/characters/char_bake.png',
		description: 'A sugar sorceress who codes sweet spells into every pastel pastry.',
	},
	{
		name: 'Left IRL for gaming',
		img: '/characters/char_gaming.png',
		description: 'A portal-hopping rogue who hacks realities one boss battle at a time.',
	},
];

export default function Home1() {
	const [index, setIndex] = useState(0);
	const location = useLocation();
	const theme = new URLSearchParams(location.search).get('theme');

	const next = () => setIndex((index + 1) % characters.length);
	const prev = () => setIndex((index - 1 + characters.length) % characters.length);

	const glowClass = theme === 'cute' ? 'shadow-[0_0_20px_#fbcfe8,0_0_40px_#f0abfc]' : '';

	return (
		<div className="bg-gradient-to-br from-pink-200 via-purple-100 to-violet-200 min-h-screen p-6 font-sans text-pink-700 relative overflow-hidden">
      {/* Choose Your Character */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-wiggle">
         See Your Characters
        </h2>
        <div className="flex items-center justify-center gap-6">
          <button onClick={prev} className="text-4xl hover:scale-125 transition-transform">⬅️</button>
          <div
            className={`bg-white rounded-3xl p-6 w-80 border-4 border-pink-200 shadow-2xl transform hover:scale-105 transition duration-300 ${glowClass}`}
          >
            <img
              src={characters[index].img}
              alt={characters[index].name}
              className="w-36 mx-auto mb-3 aspect-square object-contain rounded-full border-4 border-purple-200"
            />
            <h3 className="text-2xl font-bold text-purple-500 mb-1">{characters[index].name}</h3>
            <p className="text-sm text-gray-600 italic">{characters[index].description}</p>
          </div>
          <button onClick={next} className="text-4xl hover:scale-125 transition-transform">➡️</button>
        </div>
      </section>

			{/* Projects */}
			<section className="text-center mb-12">
				<h2 className="text-2xl font-bold text-violet-400 mb-6"> My Projects</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{[
						{
							id: 1,
							title: 'Semester Project - Auction House',
							img: '/projects/auction-house.png',
							description: 'An enchanting e-commerce app built with React and Tailwind.',
							link: '/one/projects/auction-house',
						},
						{
							id: 2,
							title: 'E-Commerce React',
							img: '/projects/react.png',
							description: 'A whimsical blog for celestial thoughts and dev logs.',
							link: '/one/projects/react',
						},
						{
							id: 3,
							title: 'Project Exam - Cabin AirBnB',
							img: '/projects/fireside.png',
							description: 'Track and manage your pet companions like a true RPG hero.',
							link: '/one/projects/fireside',
						},
					].map((project) => (
						<div key={project.id} className="bg-white rounded-lg p-4 shadow-md border border-pink-300">
							<Link to={project.link}>
								<img
									src={project.img}
									alt={project.title}
									className="rounded mb-3 cursor-pointer hover:opacity-90 transition"
								/>
							</Link>
							<h3 className="text-pink-600 font-semibold mb-2">{project.title}</h3>
							<p className="text-sm mb-2">{project.description}</p>
							<Link
            to={project.link}
            className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full border border-pink-300 shadow hover:bg-violet-200 hover:text-pink-800 transition text-sm">
            See more
          </Link>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className="text-center mb-12">
				<h2 className="text-2xl font-bold text-purple-400 mb-4">Skills</h2>
				<div className="flex flex-wrap justify-center gap-4 text-sm">
					{['Figma', 'Illustrator', 'Photoshop', 'HTML', 'CSS', 'JavaScript', 'Tailwind', 'React', 'Vite', 'GitHub', 'Netlify', 'SquareSpace'].map((skill) => (
						<span key={skill} className="bg-pink-700 text-pink-100 px-3 py-1 rounded-full shadow">
							{skill}
						</span>
					))}
				</div>
			</section>

			<section className="text-center">
				<h2 className="text-2xl font-bold text-purple-400 mb-2">Contact</h2>
				<p className="mb-4">Feel free to reach out or connect below:</p>

				<p className="text-lg">
					<a href="mailto:veronikaaas@live.no" className="text-pink-500 hover:underline">
						veronikaaas@live.no
					</a>
				</p>

				<div className="flex justify-center gap-6 mt-4">
					<a
						href="https://github.com/VeronikaAas"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-700 hover:text-black transition"
					>
						<svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
							<path
								fillRule="evenodd"
								d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.172c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.805 1.304 3.49.997.108-.775.42-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.004 2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.625-5.475 5.92.432.373.816 1.103.816 2.222v3.293c0 .32.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
							/>
						</svg>
						<span className="ml-2">GitHub</span>
					</a>

					<a
						href="https://www.linkedin.com/in/veronika-aas-3b138a131/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-purple-700 hover:text-purple-900 transition"
					>
						<svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 
          0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 
          0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 
          1.75-1.75 1.75zm13.5 11.3h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 
          0-2.15 1.45-2.15 2.94v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.36-1.54 
          2.8-1.54 3 0 3.55 1.98 3.55 4.56v5.62z"
							/>
						</svg>
						<span className="ml-2">LinkedIn</span>
					</a>
				</div>
			</section>
		</div>
	);
}
