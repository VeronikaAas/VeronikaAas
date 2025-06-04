export default function ContactSection() {
	return (
		<section className="text-center">
			<h2 className="text-2xl font-bold text-purple-400 mb-2">Contact</h2>
			<p className="mb-4">Feel free to reach out or connect below:</p>
			<p className="text-lg">
				<a href="mailto:veronikaaas@live.no" className="text-pink-500 hover:underline">veronikaaas@live.no</a>
			</p>
			<div className="flex justify-center gap-6 mt-4">
				<a href="https://github.com/VeronikaAas" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-black transition">
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/veronika-aas-3b138a131/" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900 transition">
					LinkedIn
				</a>
			</div>
		</section>
	);
}