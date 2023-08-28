import type { Timer } from "../types.g";

const Timer: Timer = {
	handler: undefined,
	counter: 0,
	initial: 60,
	duration: 1000, // One second
	container: <HTMLParagraphElement>document.querySelector(".js-wpm-time"),

	init: function () {
		this.counter = this.initial;
		this.container.innerText = this.initial.toString();
	},

	start: function (func) {
		if (this.handler === undefined) {
			this.handler = setInterval(func, this.duration);

			window.addEventListener("beforeunload", (e) => {
				if (this.handler !== undefined) {
					let confirmationMessage = "o/";
					e.returnValue = confirmationMessage;
					return confirmationMessage;
				}
			});
		}
	},

	stop: function () {
		this.pause();
		this.counter = 0;
	},

	pause: function () {
		clearInterval(<ReturnType<typeof setInterval>>this.handler);
		this.handler = undefined;
	},

	resume: function (func) {
		this.handler = setInterval(func, this.duration);
	},
};

export default Timer;
