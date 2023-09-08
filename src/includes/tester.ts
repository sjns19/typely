import type { Tester } from "../types.g";

import Dialog from "./dialog";
import Timer from "./timer";
import Words from "./words";
import Quotes from "./quotes";

import getIdentity from "../utils/identifier";

const Tester: Tester = {
	testType: undefined,
	typedWordList: [],
	input: <HTMLInputElement>document.querySelector(".js-test-input"),
	backButton: <HTMLButtonElement>document.querySelector(".js-back-btn"),
	startButtons: Array.from(document.querySelectorAll(".js-start-btn")),

	startTest: function (testType) {
		// Add this class to determine it's a testing page
		document.body.classList.add("is-testing");

		this.testType = testType;
		this.input.disabled = false;
		this.input.focus();

		Timer.init();
		Words.init();
		Quotes.init(testType);
	},

	stopTest: function (options) {
		if (options.showResults === true) {
			this.showFinalResult();
		}

		Timer.stop();
		Words.reset();

		this.typedWordList = [];
		this.input.value = "";
		this.input.disabled = options.disableInput;
		this.input.blur();

		if (options.restartTest === true) {
			this.startTest(this.testType);
		}
	},

	countDown: function () {
		if (--Timer.counter < 0) {
			Tester.stopTest({
				showResults: true,
				disableInput: true,
			});
		}
		Timer.container.innerText = Timer.counter.toString();
	},

	onInput: function (e) {
		let input = <HTMLInputElement>e.target;
		let inputValue = input.value;

		/**
		 * Prevent user from typing spaces or white spaces with enter/return key if
		 * there is no text typed yet.
		 */
		if (/\s+$/.test(inputValue) && inputValue.length <= 1) {
			input.value = "";
			return e.preventDefault();
		}

		/**
		 * Keep replacing the current value with the spaces removed from the typed text
		 * string to prevent user from entering more than 1 space after each word or letter.
		 */
		input.value = inputValue.replace(/\s+$/, " ");

		let typedWord = input.value.split(" ");
		let wordSpans = Quotes.container.querySelectorAll("span");

		/**
		 * Start the time once the user starts typing. The if condition is already
		 * present inside this method of the Timer object to determine whether the
		 * timer handler is undefined or not.
		 */
		Timer.start(Tester.countDown);

		Words.corrected = 0;
		Words.incorrected = 0;
		Words.typedChars++;

		/**
		 * If the test type is not sentence (1), means it's either letter or number,
		 * assign the typed word array to the typedWordList so that the correct or
		 * incorrect classes are applied as the user types.
		 */
		if (Tester.testType !== 1) {
			Tester.typedWordList = typedWord;
		}

		/**
		 * Since it's not possible to detect the pressed key code inside of the "input"
		 * event, check if the next array item is blank (space), means, the user pressed
		 * space key. Push the typed word into the typedWordList array and clear the input.
		 */
		let spacePressed = typedWord[1] === ""; // Boolean value, returns true for this variable

		if (spacePressed) {
			if (Tester.testType === 1) {
				// Push the word into the typedWordList array upon pressing the space key.
				Tester.typedWordList.push(typedWord[0]);
			}
			input.value = "";
		}

		wordSpans.forEach((span, index) => {
			let word = Tester.typedWordList[index];

			if (word == null || word == "") {
				span.classList.remove("txt-correct", "txt-incorrect");
			} else if (word === span.innerText) {
				span.classList.add("txt-correct");
				span.classList.remove("txt-incorrect", "txt-current");
				Words.corrected++;
			} else {
				span.classList.add("txt-incorrect");
				span.classList.remove("txt-correct", "txt-current");
				Words.incorrected++;
			}
		});

		Words.updateStats();

		/**
		 * Apparently, this has to be checked again cause if we move the forEach loop above
		 * inside the single statement checking this, the words/letters are not marked correct
		 * or incorrect as user types cause we are checking for the space afterall.
		 */
		if (spacePressed) {
			// Display next quote or letter once the user completes typing the current one.
			let listLen = Tester.typedWordList.length;
			let len = Tester.testType === 1 ? listLen : listLen - 1;

			if (len == Quotes.currentQuote.length) {
				Words.totalCorrected += Words.corrected;
				Words.totalIncorrected += Words.incorrected;
				Tester.typedWordList = [];
				Words.corrected = 0;
				Words.incorrected = 0;

				Quotes.update(Tester.testType);

				listLen = 0;
			}

			/**
				* Mark the next word with yellow color and underline to indicate
				* the user has to type this word next. Applies to type words only
				*/

			if (Tester.testType === 1) {
				wordSpans[listLen].classList.add("txt-current");
			}
		}
	},

	confirmCancellation: (e) => {
		e.preventDefault();

		/**
		 * If the test has not started yet (the timer handler is still undefined)
		 * stop the test upon clicking the back button without showing the confirmation
		 * dialog.
		 */
		if (Timer.handler === undefined) {
			Tester.testType = undefined;
			Tester.stopTest({
				disableInput: true,
			});
			return document.body.classList.remove("is-testing");
		}

		// Else, ask the user if they want to stop the test.
		Dialog.show({
			title: "<h3 class='txt-center txt-lg'>Stop Test?</h3>",
			contents: "<p class='txt-center txt-md p-1'>The test is in progress, are you sure you want to stop?</p>",
			confirmButtonText: "Yes",
			showCancelButton: true,
			cancelButtonText: "No",
			onConfirm: () => {
				Tester.stopTest({
					disableInput: true,
				});
				document.body.classList.remove("is-testing");
			},
			onCancel: () => {
				Tester.input.focus();
				Timer.resume(Tester.countDown);
			},
		});

		// Pause the timer while the dialog is shown
		Timer.pause();
	},

	showFinalResult: function () {
		if (Tester.testType === undefined)
			return;

		const instance = this;

		const { totalCorrected, totalIncorrected, accuracy } = Words.getStats();
		const { identName, identEmoji } = getIdentity(totalCorrected, Tester.testType);

		const hasWords = totalCorrected !== 0 || totalIncorrected !== 0;
		const testType = Tester.testType;

		const types = [
			["Letters Per Minute", "letters"],
			["Words Per Minute", "words"],
			["Numbers Per Minute", "numbers"],
		];

		let emoji = "";
		let title = "Nothing to show";
		let bodyContents = "<p>You did not type anything...</p>";

		if (hasWords) {
			const total = totalCorrected + totalIncorrected;
			const singularTypeName = types[testType][1].slice(0, -1);
			const typoCount = `${totalIncorrected} ${totalIncorrected > 1 ? "typos" : "typo"}`;

			if (!totalCorrected) {
				emoji = "👎";
				title = "That's bad...";
				bodyContents = `<p>You did not even correct a single ${singularTypeName} but made ${typoCount} instead.</p>`;
			} else {
				emoji = identEmoji;
				title = `You sir are ${identName}`;
				bodyContents = `
          <p>
						You typed total of ${total} ${types[testType][1]} 
						with ${accuracy}% accuracy and made ${totalIncorrected ? typoCount : "no typos"}.
					</p>
          <div class="p-1">
            <p class="txt-md">Your ${types[testType][0]} is</p>
            <p class="txt-lg txt-primary mt-1">${totalCorrected}</p>
          </div>
        `;
			}
		}

		let titleString = `
      <div class="txt-center txt-lg">
        <p style="font-size: 5rem">${emoji}</p>
        <h3>${title}</h3>
      </div>
    `;

		Dialog.show({
			title: titleString,
			contents: `<div class="txt-center p-1">${bodyContents}</div>`,
			confirmButtonText: "Test Again",
			showCancelButton: true,
			onConfirm: () => {
				instance.stopTest({
					restartTest: true,
				});
			},
			onCancel: () => document.body.classList.remove("is-testing")
		});
	},
};

export default Tester;