const skills = [
	'Figma',
	'Adobe Illustrator',
	'Adobe Photoshop',
	'HTML',
	'CSS',
	'JavaScript',
	'Tailwind',
	'React',
	'Vite',
	'GitHub',
	'Netlify',
	'SquareSpace',
];

export default function SkillsDark() {
	return (
		<section className="text-center">
			<h2 className="text-2xl font-bold text-red-400 mb-4">Core Skills</h2>
			<div className="flex flex-wrap justify-center gap-4 text-sm">
				{skills.map((skill) => (
					<span key={skill} className="bg-red-900 text-red-300 px-3 py-1 rounded-full shadow">
						{skill}
					</span>
				))}
			</div>
		</section>
	);
}
