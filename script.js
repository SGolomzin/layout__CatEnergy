const diffImgBefore = document.querySelector(".before-after__img-before");
const diffImgAfter = document.querySelector(".before-after__img-after");

function transformDiff(percent) {
	diffImgAfter.style.clipPath = calcDiffPoly(percent, 'l');
	diffImgBefore.style.clipPath = calcDiffPoly(percent, 'r');
}

function calcDiffPoly(percent, part) {
	let a = b = 0, c = d = 100;

	if (part === 'l') {
		a = b = Math.round(percent * 100);
	} else if (part === 'r') {
		c = d = Math.round(percent * 100);
	}

	return `polygon(${a}% 0%, ${b}% 100%, ${c}% 100%, ${d}% 0%)`
}

const btnMobileMainHeaderMenu = document.querySelector(".main-header__toggle-menu-btn");
const mainHeaderMenu = document.querySelector(".main-menu");

btnMobileMainHeaderMenu.addEventListener("click", (e) => {
	e.target.classList.toggle("main-header__toggle-menu-btn--open");
	e.target.classList.toggle("main-header__toggle-menu-btn--close");
	var btnValue = e.target.querySelector("span");

	var isOpen = +btnValue.dataset.open;

	if (isOpen) {
		btnValue.innerText = "Открыть меню";
		btnValue.dataset.open = "0";
		mainHeaderMenu.style.display = "none";
	} else {
		btnValue.innerText = "Закртыть меню";
		btnValue.dataset.open = "1";
		mainHeaderMenu.style.display = "block";
	}
})