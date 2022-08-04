const diffImgBefore = document.querySelector(".before-after__img-before");
const diffImgAfter = document.querySelector(".before-after__img-after");

function transformDiff(percent) {
	diffImgAfter.style.clipPath = calcDiffPoly(percent, 'l');
	diffImgBefore.style.clipPath = calcDiffPoly(percent, 'r');
}

function calcDiffPoly(percent, part) {
	let a = b = 0, c = d = 100;

	if (part === 'l') {
		a = b = 100 - Math.round(percent * 100);
	} else if (part === 'r') {
		c = d = 100 - Math.round(percent * 100);
	}

	return `polygon(${a}% 0%, ${b}% 100%, ${c}% 100%, ${d}% 0%)`
}