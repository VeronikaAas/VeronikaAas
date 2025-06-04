import { useEffect, useState } from 'react';

const gothTrailCount = 30;

function getRandomGothColor() {
	const lightShades = ['#f5f5f5', '#eaeaea', '#dcdcdc', '#cccccc', '#bbbbbb'];
	return lightShades[Math.floor(Math.random() * lightShades.length)];
}

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
