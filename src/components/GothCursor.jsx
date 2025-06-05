import { useEffect, useState } from 'react';

const gothTrailCount = 30;

/**
 * Returns a random light "goth" shade for cursor trail symbols.
 *
 * These shades are subtle grayscale colors to match a goth aesthetic.
 * @returns {string} A hex color code
 */

function getRandomGothColor() {
	const lightShades = ['#f5f5f5', '#eaeaea', '#dcdcdc', '#cccccc', '#bbbbbb'];
	return lightShades[Math.floor(Math.random() * lightShades.length)];
}

/**
 * GothCursor component adds a spooky cursor trail effect with animated skulls (☠).
 *
 * It tracks the mouse movement and renders floating skull symbols that fade out,
 * creating a soft goth aesthetic using grayscale tones.
 *
 * @component
 * @example
 * return <GothCursor />
 */

export default function GothCursor() {
	const [marks, setMarks] = useState([]);

	useEffect(() => {
		let lastTime = 0;
		const spacing = 25;

		const handleMove = (e) => {
			const now = Date.now();
			if (now - lastTime < spacing) return;
			lastTime = now;

			const newMark = {
				id: Date.now() + Math.random(),
				x: e.clientX,
				y: e.clientY,
				size: Math.random() * 14 + 16,
				color: getRandomGothColor(),
				symbol: '☠',
			};

			setMarks((prev) => [...prev.slice(-gothTrailCount + 1), newMark]);
		};

		window.addEventListener('mousemove', handleMove);
		return () => window.removeEventListener('mousemove', handleMove);
	}, []);

	return (
		<>
			{marks.map((mark) => (
				<div
					key={mark.id}
					className="pointer-events-none fixed z-50 animate-fadeOut font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.7)]"
					style={{
						top: mark.y,
						left: mark.x,
						fontSize: mark.size,
						color: mark.color,
						transform: 'translate(-50%, -50%)',
					}}
				>
					{mark.symbol}
				</div>
			))}
		</>
	);
}
