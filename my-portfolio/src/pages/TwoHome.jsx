import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const characters = [
	{
		name: 'Book nerd',
		img: '/characters/dark_book.png',
		description: 'A silent scholar who deciphers forbidden code in the ruins of lost civilizations.',
	},
	{
		name: 'Dog lover',
		img: '/characters/dark_dog.png',
		description: 'A loyal scout trained in code and combat, never alone, never off guard.',
	},
	{
		name: 'Explorer',
		img: '/characters/dark_trav.png',
		description: 'A hardened wanderer who uncovers dark systems in forgotten digital frontiers.',
	},
	{
		name: 'Workout junkie',
		img: '/characters/dark_work.png',
		description: 'A relentless warrior who builds muscle and frontends with brutal precision.',
	},
	{
		name: 'Bakery girl',
		img: '/characters/dark_cake.png',
		description: "Don't be fooled by the frosting—she's coded for vengeance beneath the sweetness.",
	},
	{
		name: 'Left IRL for gaming',
		img: '/characters/dark_gaming.png',
		description: 'An elite operator who abandoned the real world to master digital warfare.',
	},
];

export default function TwoHome() {
	const [index, setIndex] = useState(0);
	const location = useLocation();
	const theme = new URLSearchParams(location.search).get('theme');

	const next = () => setIndex((index + 1) % characters.length);
	const prev = () => setIndex((index - 1 + characters.length) % characters.length);

	const glowClass = theme === 'dark' ? 'shadow-[0_0_20px_#f87171,0_0_40px_#ef4444]' : '';

	return (
		<div className="bg-neutral-700 text-white min-h-screen p-6 font-mono space-y-16">
			<section className="text-center mb-16">
  <h2 className="text-4xl font-extrabold text-red-400 mb-6">See Your Characters</h2>
  <div className="flex items-center justify-center gap-6">
    <button
      onClick={prev}
      className="text-4xl text-red-400 hover:text-red-500 hover:scale-125 transition-transform drop-shadow-[0_0_8px_#f87171] cursor-pointer"
    >
      &laquo;
    </button>
    <div
      className={`bg-neutral-900 rounded-3xl p-6 w-80 border-4 border-red-500 shadow-2xl transform hover:scale-105 transition duration-300 ${glowClass}`}
    >
      <img
        src={characters[index].img}
        alt={characters[index].name}
        className="w-36 mx-auto mb-3 aspect-square object-contain rounded-full border-4 border-red-400"
      />
      <h3 className="text-2xl font-bold text-red-300 mb-1">{characters[index].name}</h3>
      <p className="text-sm text-gray-300 italic">{characters[index].description}</p>
    </div>
    <button
      onClick={next}
      className="text-4xl text-red-400 hover:text-red-500 hover:scale-125 transition-transform drop-shadow-[0_0_8px_#f87171] cursor-pointer"
    >
      &raquo;
    </button>
  </div>
</section>
			{/* Projects */}
			<section className="text-center">
				<h2 className="text-2xl font-bold text-red-400 mb-6">My Projects</h2>
				<div className="grid md:grid-cols-3 gap-6">
					{[
						{
							id: 1,
							title: 'Semester Project - Auction House',
							img: '/projects/auction-house.png',
							description: 'An enchanting e-commerce app built with React and Tailwind.',
							link: '/two/projects/DarkAuction',
						},
						{
							id: 2,
							title: 'E-Commerce React',
							img: '/projects/react.png',
							description: 'A whimsical blog for celestial thoughts and dev logs.',
							link: '/two/projects/DarkReact',
						},
						{
							id: 3,
							title: 'Project Exam - Cabin AirBnB',
							img: '/projects/fireside.png',
							description: 'Track and manage your pet companions like a true RPG hero.',
							link: '/two/projects/DarkFireside',
						},
					].map((project) => (
						<div key={project.id} className="bg-white rounded-lg p-4 shadow-md border border-red-300">
							<Link to={project.link}>
								<img
									src={project.img}
									alt={project.title}
									className="rounded mb-3 cursor-pointer hover:opacity-90 transition"
								/>
							</Link>
							<h3 className="text-red-600 font-semibold mb-2">{project.title}</h3>
							<p className="text-sm mb-2">{project.description}</p>
							<Link
								to={project.link}
								className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full border border-red-300 shadow hover:bg-red-200 hover:text-red-800 transition text-sm"
							>
								See more
							</Link>
						</div>
					))}
				</div>
			</section>

			{/* Skills */}
			<section className="text-center">
				<h2 className="text-2xl font-bold text-red-400 mb-4">Core Skills</h2>
				<div className="flex flex-wrap justify-center gap-4 text-sm">
					{['Figma', 'Illustrator', 'Photoshop', 'HTML', 'CSS', 'JavaScript', 'Tailwind', 'React', 'Vite', 'GitHub', 'Netlify', 'SquareSpace'].map((skill) => (
						<span key={skill} className="bg-red-900 text-red-300 px-3 py-1 rounded-full shadow">
							{skill}
						</span>
					))}
				</div>
			</section>

			{/* Contact */}
			<section className="text-center">
				<h2 className="text-2xl font-bold text-red-400 mb-2">📬 Contact</h2>
				<p className="mb-4">Feel free to reach out or connect below:</p>

				<p className="text-lg">
					<a href="mailto:veronikaaas@live.no" className="text-red-500 hover:underline">
						veronikaaas@live.no
					</a>
				</p>

				<div className="flex justify-center gap-6 mt-4">
					<a
						href="https://github.com/VeronikaAas"
						target="_blank"
						rel="noopener noreferrer"
						className="text-red-700 hover:text-black transition"
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
						className="text-red-700 hover:text-red-900 transition"
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
