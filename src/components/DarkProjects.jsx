import { Link } from 'react-router-dom';

/**
 * List of project data displayed in the ProjectsDark section.
 * @type {Array<{ id: number, title: string, img: string, description: string, link: string }>}
 */

const projects = [
	{
		id: 1,
		title: 'Semester Project - Auction House',
		img: '/projects/auction-house.png',
		description: 'My answer to Semester Project, a Auction House for luxuary items.',
		link: '/two/projects/DarkAuction',
	},
	{
		id: 2,
		title: 'E-Commerce React',
		img: '/projects/react.png',
		description: 'My answer to JavaScript Framework assignment, a e-commerce shop built with React.',
		link: '/two/projects/DarkReact',
	},
	{
		id: 3,
		title: 'Project Exam - Fireside Holidaze',
		img: '/projects/fireside.png',
		description: 'My answer to Project Exam, a Cabin AirBnB.',
		link: '/two/projects/DarkFireside',
	},
];

/**
 * ProjectsDark component showcases a grid of academic projects.
 *
 * Each project includes an image, title, description, and a link to a detailed project page.
 * The visual theme is styled for a darker/red-toned palette.
 *
 * @component
 * @example
 * return <ProjectsDark />
 */

export default function ProjectsDark() {
	return (
		<section className="text-center">
			<h2 className="text-2xl font-bold text-red-400 mb-6">My Projects</h2>
			<div className="grid md:grid-cols-3 gap-6">
				{projects.map((project) => (
					<div key={project.id} className="bg-white rounded-lg p-4 shadow-md border border-red-300">
						<Link to={project.link}>
							<img src={project.img} alt={project.title} className="rounded mb-3 cursor-pointer hover:opacity-90 transition" />
						</Link>
						<h3 className="text-red-600 font-semibold mb-2">{project.title}</h3>
						<p className="text-sm mb-2 text-red-600">{project.description}</p>
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
	);
}
