import type { Words } from "../types.g";

const Words: Words = {
	totalCorrected: 0,
	totalIncorrected: 0,
	corrected: 0,
	incorrected: 0,
	accuracy: 0,
	typedChars: 0,
	list: [],
	accuracyContainer: <HTMLParagraphElement>document.querySelector(".js-accuracy"),
	correctedContainer: <HTMLParagraphElement>document.querySelector(".js-corrected-count"),
	incorrectedContainer: <HTMLParagraphElement>document.querySelector(".js-incorrected-count"),

	init: function () {
		this.accuracyContainer.innerText = "0";
		this.correctedContainer.innerText = "0";
		this.incorrectedContainer.innerText = "0";
	},

	getStats: function () {
		let totalCorrected = this.totalCorrected + this.corrected;
		let totalIncorrected = this.totalIncorrected + this.incorrected;
		let chars = this.typedChars - (this.totalIncorrected + this.incorrected);
		let accuracy = Math.round((chars / this.typedChars) * 100);
		return {
			totalCorrected,
			totalIncorrected,
			accuracy,
		};
	},

	updateStats: function () {
		const { totalCorrected, totalIncorrected, accuracy } = this.getStats();

		this.accuracyContainer.innerText = `${accuracy}%`;
		this.correctedContainer.innerText = `${totalCorrected}`;
		this.incorrectedContainer.innerText = `${totalIncorrected}`;
	},

	reset: function () {
		this.totalCorrected = 0;
		this.totalIncorrected = 0;
		this.corrected = 0;
		this.incorrected = 0;
		this.typedChars = 0;
	},
};

export default Words;
