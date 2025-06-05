import { useState } from 'react';

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

export default function CharacterCarousel() {
	const [index, setIndex] = useState(0);

	const next = () => setIndex((index + 1) % characters.length);
	const prev = () => setIndex((index - 1 + characters.length) % characters.length);

	return (
		<section className="text-center mb-16">
			<h2 className="text-4xl font-extrabold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-wiggle">
				About Me
			</h2>
			<div className="flex items-center justify-center gap-6">
				<button onClick={prev} className="text-4xl text-pink-500 hover:scale-125 transition-transform cursor-pointer">
					&laquo;
				</button>
				<div className="bg-white rounded-3xl p-6 w-80 border-4 border-pink-200 shadow-[0_0_20px_#fbcfe8,0_0_40px_#f0abfc] transform hover:scale-105 transition duration-300">
					<img
						src={characters[index].img}
						alt={characters[index].name}
						className="w-36 mx-auto mb-3 aspect-square object-contain rounded-full border-4 border-purple-200"
					/>
					<h3 className="text-2xl font-bold text-purple-500 mb-1">{characters[index].name}</h3>
					<p className="text-sm text-gray-600 italic">{characters[index].description}</p>
				</div>
				<button onClick={next} className="text-4xl text-pink-500 hover:scale-125 transition-transform cursor-pointer">
					&raquo;
				</button>
			</div>
		</section>
	);
}
