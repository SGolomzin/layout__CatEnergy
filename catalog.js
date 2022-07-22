const productsList = [
	{
		"title": "Cat Energy PRO 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Курица",
			"Цена": "700 Р."
		}
	},
	{
		"title": "Cat Energy PRO 1000 г",
		"info": {
			"Масса": "1000 г",
			"Вкус": "Курица",
			"Цена": "1000 Р."
		}
	},
	{
		"title": "Cat Energy PRO 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Рыба",
			"Цена": "700 Р."
		}
	},
	{
		"title": "Cat Energy PRO 1000 г",
		"info": {
			"Масса": "1000 г",
			"Вкус": "Рыба",
			"Цена": "1000 Р."
		}
	},
	{
		"title": "Cat Energy SLIM 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Гречка",
			"Цена": "400 Р."
		}
	},
	{
		"title": "Cat Energy SLIM 1000 г",
		"info": {
			"Масса": "1000 г",
			"Вкус": "Гречка",
			"Цена": "700 Р."
		}
	},
	{
		"title": "Cat Energy SLIM 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Рис",
			"Цена": "500 Р."
		}
	}
];

let cardTemplate = document.getElementById("product-card-template");
let productsContainer = document.querySelector(".products__catalog");

productsList.forEach(product => {
	let card = cardTemplate.content.cloneNode(true);
	let title = card.querySelector(".product-card__title");
	let tableBody = card.querySelector(".info__table-body");

	title.textContent = product.title;

	for (let [key, value] of Object.entries(product.info)) {
		let tr = document.createElement("tr");
		let tdKey = document.createElement("td");
		let tdValue = document.createElement("td");

		tdKey.textContent = key;
		tdValue.textContent = value;

		tr.append(tdKey, tdValue);
		tr.classList.add("info__table-row");

		tableBody.append(tr);
	}

	productsContainer.prepend(card);
})