/**
 * ContactSection component displays contact information and links to external profiles.
 *
 * It includes an email link and external links to GitHub and LinkedIn.
 * Designed with Tailwind CSS and styled to match a goth aesthetic.
 *
 * @component
 * @example
 * return <ContactDark />
 */

export default function ContactDark() {
	return (
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
							d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 
              8.205 11.385.6.11.82-.26.82-.577v-2.172c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 
              1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.805 1.304 3.49.997.108-.775.42-1.305.76-1.605-2.665-.3-5.466-1.333-5.466-5.93 
              0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.118-3.176 
              0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.004 
              2.047.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.656 
              1.653.244 2.873.12 3.176.77.84 1.236 1.91 1.236 
              3.22 0 4.61-2.805 5.625-5.475 
              5.92.432.373.816 1.103.816 
              2.222v3.293c0 .32.216.694.825.576C20.565 
              21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
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
							d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
              2.76 2.24 5 5 5h14c2.76 0 
              5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.3c-.97 
              0-1.75-.79-1.75-1.75s.78-1.75 
              1.75-1.75 1.75.79 1.75 1.75-.78 
              1.75-1.75 1.75zm13.5 
              11.3h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.86 
              0-2.15 1.45-2.15 2.94v5.7h-3v-10h2.89v1.36h.04c.4-.75 
              1.36-1.54 2.8-1.54 3 0 3.55 1.98 3.55 4.56v5.62z"
						/>
					</svg>
					<span className="ml-2">LinkedIn</span>
				</a>
			</div>
		</section>
	);
}
