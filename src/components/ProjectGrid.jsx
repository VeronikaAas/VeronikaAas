import { Link } from 'react-router-dom';

const projects = [
	{
		id: 1,
		title: 'Semester Project - Auction House',
		img: '/projects/auction-house.png',
		description: 'An enchanting e-commerce app built with React and Tailwind.',
		link: '/one/projects/Auction',
	},
	{
		id: 2,
		title: 'E-Commerce React',
		img: '/projects/react.png',
		description: 'A whimsical blog for celestial thoughts and dev logs.',
		link: '/one/projects/React',
	},
	{
		id: 3,
		title: 'Project Exam - Cabin AirBnB',
		img: '/projects/fireside.png',
		description: 'Track and manage your pet companions like a true RPG hero.',
		link: '/one/projects/Fireside',
	},
];

export default function ProjectGrid() {
	return (
		<section className="text-center mb-12">
			<h2 className="text-2xl font-bold text-violet-400 mb-6">My Projects</h2>
			<div className="grid md:grid-cols-3 gap-6">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-white rounded-lg p-4 shadow-md border border-pink-300 hover:shadow-lg transition"
					>
						<Link to={project.link}>
							<img
								src={project.img}
								alt={project.title}
								className="rounded mb-3 w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
							/>
						</Link>
						<h3 className="text-pink-600 font-semibold mb-2">{project.title}</h3>
						<p className="text-sm text-gray-700 mb-2">{project.description}</p>
						<Link
							to={project.link}
							className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full border border-pink-300 shadow hover:bg-violet-200 hover:text-pink-800 transition text-sm"
						>
							See more
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
