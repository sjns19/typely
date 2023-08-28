import "./styles/style.scss";

import Page from "./includes/page";
import Dialog from "./includes/dialog";
import Tester from "./includes/tester";

(function (w) {
	w.addEventListener("DOMContentLoaded", function () {
		// Construct the dialog elements
		Dialog.construct();

		// Load theme
		Page.loadTheme();
		Page.themeToggler?.addEventListener("click", () => Page.applyTheme(true));

		/**
		 * Loop through the speed test option cards that the user
		 * selects and pass the clicked option's index as the test type.
		 */
		Tester.startButtons.forEach((button, index) => {
			button.addEventListener("click", () => {
				Tester.startTest(index);
			});
		});

		// Force scroll to the top of the window
		Tester.input.addEventListener("focus", () => {
			setTimeout(() => {
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
			}, 300);
		});
	});

	// Handle the user typed data inside of the textarea.
	Tester.input.addEventListener("input", Tester.onInput);

	// Stop user from copy/pasting the quote into the text input (that's cheating)
	Tester.input.addEventListener("paste", (e) => e.preventDefault());
	Tester.backButton.addEventListener("click", Tester.confirmCancellation);
})(window);