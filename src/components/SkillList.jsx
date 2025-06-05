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

export default function SkillsList() {
	return (
		<section className="text-center mb-12">
			<h2 className="text-2xl font-bold text-purple-400 mb-4">Skills</h2>
			<div className="flex flex-wrap justify-center gap-4 text-sm">
				{skills.map((skill) => (
					<span key={skill} className="bg-pink-700 text-pink-100 px-3 py-1 rounded-full shadow">
						{skill}
					</span>
				))}
			</div>
		</section>
	);
}
