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
	} else {
		btnValue.innerText = "Закртыть меню";
		btnValue.dataset.open = "1";
	}
	mainHeaderMenu.classList.toggle("main-menu--opend");
	mainHeaderMenu.classList.toggle("main-menu--closed");
})

const map_container = document.querySelector('.contacts__map-yandex');
const map_stub = map_container.querySelector(".contacts__map-yandex-stub");
const options_map = {
	once: true,	//запуск один раз, и удаление наблюдателя сразу
	passive: true,
	capture: true
};
map_container.addEventListener('click', start_lazy_map, options_map);
map_container.addEventListener('mouseover', start_lazy_map, options_map);
map_container.addEventListener('touchstart', start_lazy_map, options_map);
map_container.addEventListener('touchmove', start_lazy_map, options_map);

let map_loaded = false;
function start_lazy_map() {
	if (!map_loaded) {
		let map_block = document.getElementById('ymap_lazy');
		map_loaded = true;
		map_block.setAttribute('src', map_block.getAttribute('data-src'));
		map_block.removeAttribute('data_src');
		map_stub.style.display = "none";
		console.log('YMAP LOADED');
	}
}