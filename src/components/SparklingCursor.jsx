import { useEffect, useState } from 'react';

const sparkleCount = 30;

/**
 * Generates a random pastel color in HSL format.
 *
 * The hue is chosen from a predefined set of soft, whimsical tones
 * to create a dreamy sparkle trail effect.
 *
 * @returns {string} A pastel HSL color string
 */

function getRandomPastelColor() {
	const hues = [280, 320, 200, 100, 40];
	const hue = hues[Math.floor(Math.random() * hues.length)];
	return `hsl(${hue}, 100%, 85%)`;
}

/**
 * SparkleCursor component displays a trailing pastel "✨" effect that follows the cursor.
 *
 * Sparkles are rendered at the cursor's position with random pastel colors and sizes,
 * fading out automatically for a whimsical UI effect. Styled with Tailwind CSS and
 * positioned using fixed layout.
 *
 * @component
 * @example
 * return <SparkleCursor />
 */

export default function SparkleCursor() {
	const [sparkles, setSparkles] = useState([]);

	useEffect(() => {
		let lastTime = 0;
		const spacing = 25;

		const handleMove = (e) => {
			const now = Date.now();
			if (now - lastTime < spacing) return;
			lastTime = now;

			const newSparkle = {
				id: Date.now() + Math.random(),
				x: e.clientX,
				y: e.clientY,
				size: Math.random() * 20 + 24,
				color: getRandomPastelColor(),
			};

			setSparkles((prev) => [...prev.slice(-sparkleCount + 1), newSparkle]);
		};

		window.addEventListener('mousemove', handleMove);
		return () => window.removeEventListener('mousemove', handleMove);
	}, []);

	return (
		<>
			{sparkles.map((sparkle) => (
				<div
					key={sparkle.id}
					className="pointer-events-none fixed z-50 animate-fadeOut font-bold drop-shadow-[0_0_8px_rgba(255,192,203,0.8)]"
					style={{
						top: sparkle.y,
						left: sparkle.x,
						fontSize: sparkle.size,
						color: sparkle.color,
						transform: 'translate(-50%, -50%)',
					}}
				>
					✨
				</div>
			))}
		</>
	);
}
