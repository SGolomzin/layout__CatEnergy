const productsList = [
	{
		"title": "Cat Energy PRO 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Курица",
			"Цена": "700 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_500_chicken_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_500_chicken_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом курицы объемом 500 грамм",
			"loading": "lazy"
		}
	},
	{
		"title": "Cat Energy PRO 1000 г",
		"info": {
			"Масса": "1000 г",
			"Вкус": "Курица",
			"Цена": "1000 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_1000_chicken_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_1000_chicken_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом курицы объемом 1000 грамм",
			"loading": "lazy"
		}
	},
	{
		"title": "Cat Energy PRO 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Рыба",
			"Цена": "700 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_500_fish_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_500_fish_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом рыбы объемом 500 грамм",
			"loading": "lazy"
		}
	},
	{
		"title": "Cat Energy PRO 1000 г",
		"info": {
			"Масса": "1000 г",
			"Вкус": "Рыба",
			"Цена": "1000 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_1000_fish_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_1000_fish_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом рыбы объемом 1000 грамм",
			"loading": "lazy"
		}
	},
	{
		"title": "Cat Energy SLIM 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Гречка",
			"Цена": "400 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_500_buckwheat_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_500_buckwheat_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом гречки объемом 500 грамм",
			"loading": "lazy"
		}
	},
	{
		"title": "Cat Energy SLIM 1000 г",
		"info": {
			"Масса": "1000 г",
			"Вкус": "Гречка",
			"Цена": "700 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_1000_buckwheat_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_1000_buckwheat_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом гречки объемом 1000 грамм",
			"loading": "lazy"
		}
	},
	{
		"title": "Cat Energy SLIM 500 г",
		"info": {
			"Масса": "500 г",
			"Вкус": "Рис",
			"Цена": "500 Р."
		},
		"image": {
			"src": "./public/catalog/energy_pro_500_rice_desktop@1x.png",
			"srcset": "./public/catalog/energy_pro_500_rice_desktop@2x.png 2x",
			"alt": "Изображение упаковки со вкусом риса объемом 500 грамм",
			"loading": "lazy"
		}
	}
];

let cardTemplate = document.getElementById("product-card-template");
let productsContainer = document.querySelector(".products__catalog");

let productList = [];
productsList.forEach(product => {
	let card = cardTemplate.content.cloneNode(true);
	let title = card.querySelector(".product-card__title");
	let tableBody = card.querySelector(".info__table-body");
	let thumbnail = card.querySelector(".product-card__thumbnail");
	let image = document.createElement("img");

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

	for (let [key, value] of Object.entries(product.image)) {
		image.setAttribute(key, value);
	}
	image.classList.add("product-card__thumbnail-image");
	thumbnail.append(image);

	productList.push(card);
})

productsContainer.prepend(...productList)