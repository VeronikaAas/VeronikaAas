import CharacterCarouselDark from '../components/DarkCharacterCarousel';
import ProjectsDark from '../components/DarkProjects';
import SkillsDark from '../components/DarkSkills';
import ContactDark from '../components/DarkContact';
import { useEffect } from 'react';

export default function TwoHome() {
	useEffect(() => {
		document.title = 'Home | VA';
	}, []);
	return (
		<div className="bg-neutral-700 text-white min-h-screen p-6 font-mono space-y-16">
			<CharacterCarouselDark />
			<ProjectsDark />
			<SkillsDark />
			<ContactDark />
		</div>
	);
}
