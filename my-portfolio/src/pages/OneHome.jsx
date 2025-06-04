import { useLocation } from 'react-router-dom';
import CharacterCarousel from '../components/CharacterCarousel';
import ProjectGrid from '../components/ProjectGrid';
import SkillsList from '../components/SkillList';
import ContactSection from '../components/ContactSection';

export default function Home1() {
	const location = useLocation();
	const theme = new URLSearchParams(location.search).get('theme');

	return (
		<div className="bg-gradient-to-br from-pink-200 via-purple-100 to-violet-200 min-h-screen p-6 font-sans text-pink-700 relative overflow-hidden">
			<CharacterCarousel />
			<ProjectGrid />
			<SkillsList />
			<ContactSection />
		</div>
	);
}
