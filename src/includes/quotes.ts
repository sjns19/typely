import type { Quotes } from "../types.g";

import { shuffleArray, getRandomChar } from "../utils/helper";
import QuotesList from "../data/quotes";

const Quotes: Quotes = {
	index: 0,
	list: [],
	currentQuote: [],
	container: <HTMLParagraphElement>document.querySelector(".js-quote"),

	init: function (testType) {
		this.container.classList.remove("txt-center", "txt-xl");

		if (testType !== 1) {
			this.container.classList.add("txt-center", "txt-xl");
		} else {
			shuffleArray(QuotesList);
			this.list = QuotesList;
		}

		this.update(testType);
	},

	update: function (testType) {
		if (testType === 1) {
			let index = this.index;
			let list = this.list[index].split(" ");

			this.container.textContent = null;
			this.currentQuote = list;
			this.index = index < Quotes.list.length - 1 ? index + 1 : 0;

			list.forEach((word) => this.create(word));

			// Make the first word yellow to indicate the user should type this word
			this.container.querySelectorAll("span")[0].classList.add("txt-current");
			return;
		}

		let randomChar = getRandomChar(testType !== 0);

		this.currentQuote = randomChar;
		this.container.textContent = null;
		this.create(randomChar);
	},

	create: function (word) {
		let span = document.createElement("span");

		span.innerText = `${word}`;
		span.dataset.text = `${word}`; // For fade-out animation

		this.container.appendChild(span);
		this.container.appendChild(document.createTextNode(" "));
	},
};

export default Quotes;
