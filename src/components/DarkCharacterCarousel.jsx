import { useState } from 'react';

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

export default function CharacterCarouselDark() {
	const [index, setIndex] = useState(0);

	const next = () => setIndex((index + 1) % characters.length);
	const prev = () => setIndex((index - 1 + characters.length) % characters.length);

	return (
		<section className="text-center mb-16">
			<h2 className="text-4xl font-extrabold text-red-400 mb-6">About me</h2>
			<div className="flex items-center justify-center gap-6">
				<button
					onClick={prev}
					className="text-4xl text-red-400 hover:text-red-500 hover:scale-125 transition-transform drop-shadow-[0_0_8px_#f87171]"
				>
					&laquo;
				</button>
				<div className="bg-neutral-900 rounded-3xl p-6 w-80 border-4 border-red-500 shadow-2xl transform hover:scale-105 transition duration-300">
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
					className="text-4xl text-red-400 hover:text-red-500 hover:scale-125 transition-transform drop-shadow-[0_0_8px_#f87171]"
				>
					&raquo;
				</button>
			</div>
		</section>
	);
}
