import React from 'react';

type FullBleedScriptProps = {
	id: string;
};

function animateFullBleed(fullBleedId: string) {
	const fullBleedRoot = document.getElementById(fullBleedId);

	if (!fullBleedRoot) {
		return;
	}

	if (fullBleedRoot.querySelector('canvas')) {
		return;
	}

	const bounds = fullBleedRoot.getBoundingClientRect();

	if (bounds.width === 0) {
		setTimeout(() => animateFullBleed(fullBleedId), 10);
		return;
	}

	console.log('width', bounds.width, 'height', bounds.height);

	const canvas = document.createElement('canvas');
	canvas.width = bounds.width;
	canvas.height = bounds.height;
	canvas.style.setProperty('position', 'absolute');
	canvas.style.setProperty('z-index', '0');
	canvas.style.setProperty('top', '0');
	canvas.style.setProperty('left', '0');

	fullBleedRoot.appendChild(canvas);

	const context = canvas.getContext('2d');

	// function drawSquare() {
	// 	const channel = Math.floor(Math.random() * 255);
	// 	context.fillStyle = `rgb(${channel}, ${channel}, ${channel})`;
	// 	context.fillRect(
	// 		Math.random() * canvas.width,
	// 		Math.random() * canvas.height,
	// 		10,
	// 		10
	// 	);
	//
	// 	requestAnimationFrame(drawSquare);
	// }
	//
	// requestAnimationFrame(drawSquare);

	// u(t) is called 60 times per second.
	// t: Elapsed time in seconds.
	// S: Shorthand for Math.sin.
	// C: Shorthand for Math.cos.
	// T: Shorthand for Math.tan.
	// R: Function that generates rgba-strings, usage ex.: R(255, 255, 255, 0.5)
	// c: A 1920x1080 canvas.
	// x: A 2D context for that canvas.

	const T = Math.tan;
	const x = context;
	let skip = 5;

	function u(t: number) {
		let i, d, e;
		if (!skip) {
			skip = 5;
			for (
				T[2931] = i = 6001;
				i--;
				// @ts-ignore
				T[i] & !(T[(d += i)] | T[d + e] | T[d - e]) &&
				x.fillRect((i % 99) * 20, i / 5, 21, (T[d] = 21))
			)
				// @ts-ignore
				(d = ((Math.random((e = 1)) * 4) | 0) * 2 - 1),
					d > 1 ? (d = (d - 4) * 99) : (e = 99);
		}
		skip -= 1;
		requestAnimationFrame(u);
	}

	requestAnimationFrame(u);

	context.fillStyle = '#BA654F22';
}

function FullBleedScript({ id }: FullBleedScriptProps) {
	return (
		<script
			type="text/javascript"
			dangerouslySetInnerHTML={{
				__html: `${animateFullBleed.toString()}; animateFullBleed('${id}');`,
			}}
		></script>
	);
}

export { FullBleedScript };
