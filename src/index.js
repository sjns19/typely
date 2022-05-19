import "./styles/style.scss";

import Page from "./includes/page";
import Dialog from "./includes/dialog";
import Timer from "./includes/timer";
import Quotes from "./includes/quotes";
import Words from "./includes/words";
import Identifier from "./includes/identifier";

("use strict");

window.addEventListener("load", () => Page.loadTheme());

const Tester = {
  testType: null,
  typedWordList: [],
  input: document.querySelector(".js-test-input"),
  backButton: document.querySelector(".js-back-btn"),
  startButtons: document.querySelectorAll(".js-start-btn"),

  startTest: function (testType) {
    Page.toggle("test");

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
    Timer.container.innerText = Timer.counter;
  },

  showFinalResult: function () {
    let instance = this;

    let { totalCorrected, totalIncorrected, accuracy } = Words.getStats();
    let { idName, idEmoji } = Identifier(totalCorrected, Tester.testType);
    let hasWords = totalCorrected || totalIncorrected;
    let testType = Tester.testType;
    let types = [
      ["Letters Per Minute", "letters"],
      ["Words Per Minute", "words"],
      ["Numbers Per Minute", "numbers"],
    ];

    let emoji = "";
    let title = "Nothing to show";
    let bodyContents = "<p>You did not type anything...</p>";

    if (hasWords) {
      let total = totalCorrected + totalIncorrected;
      let singularTypeName = types[testType][1].slice(0, -1);
      let typoCount = `${totalIncorrected} ${
        totalIncorrected > 1 ? "typos" : "typo"
      }`;

      if (!totalCorrected) {
        emoji = "👎";
        title = "That's bad...";
        bodyContents = `
          <p>You did not even correct a single ${singularTypeName} but made ${typoCount} instead.</p>
        `;
      } else {
        emoji = idEmoji;
        title = `You sir are ${idName}`;
        bodyContents = `
          <p>You typed total of ${total} ${
          types[testType][1]
        } with ${accuracy}% accuracy and made ${
          totalIncorrected ? typoCount : "no typos"
        }.</p>
          <div class="p-1">
            <p class="txt-md">Your ${types[testType][0]} is</p>
            <p class="txt-lg txt-primary mt-1">${totalCorrected}</p>
          </div>
        `;
      }
    }

    let titleString = `
      <div class="txt-center txt-lg">
        <p class="emoji-xl">${emoji}</p>
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
      onCancel: () => Page.toggle("home"),
    });
  },
};

/**
 * Theme toggler
 */
Page.theme.toggler.addEventListener("click", () => Page.applyTheme(true));

Tester.startButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    Tester.startTest(index);
  });
});

Tester.input.addEventListener("focus", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, 300);
});

// Handle the user typed data inside of the textarea.
Tester.input.addEventListener("input", function (e) {
  let input = this;
  let inputValue = input.value;

  /**
   * Prevent user from typing spaces or white spaces with enter/return key if
   * there is no text typed yet.
   */
  if (/\s+$/.test(inputValue) && inputValue.length <= 1) {
    input.value = null;
    return e.preventDefault();
  }

  /**
   * Keep replacing the current value with the spaces removed from the typed text
   * string to prevent user from entering more than 1 space after each word/letter.
   */
  input.value = inputValue.replace(/\s+$/, " ");

  let typedWord = input.value.split(" ");
  let wordSpan = Quotes.container.querySelectorAll("span");

  // Start the time only after the user starts typing
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

  console.log(Tester.testType);

  /**
   * Since it's not possible to detect the pressed key code inside of the "input"
   * event, check if the next array item is blank (space), means, the user pressed
   * space key. Push the typed word into the typedWordList array and clear the input.
   */
  let spacePressed = typedWord[1] === "";

  if (spacePressed) {
    if (Tester.testType === 1) {
      // Push the word into the typedWordList array upon pressing the space key.
      Tester.typedWordList.push(typedWord[0]);
    }
    input.value = null;
  }

  wordSpan.forEach((span, index) => {
    let word = Tester.typedWordList[index];

    if (word == null || word == "") {
      span.classList.remove("txt-correct", "txt-incorrect");
    } else if (word === span.innerText) {
      span.classList.add("txt-correct");
      span.classList.remove("txt-incorrect");
    } else {
      span.classList.add("txt-incorrect");
      span.classList.remove("txt-correct");
    }

    if (span.classList.contains("txt-correct")) {
      Words.corrected++;
      console.log(Words.corrected);
    }

    if (span.classList.contains("txt-incorrect")) {
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
    // Display next quote/letter once the user completes typing the current one.
    let listLen = Tester.typedWordList.length;
    let len = Tester.testType === 1 ? listLen : listLen - 1;

    if (len == Quotes.currentQuote.length) {
      Words.totalCorrected += Words.corrected;
      Words.totalIncorrected += Words.incorrected;
      Words.correctled = 0;
      Words.incorrected = 0;

      Tester.typedWordList = [];
      Quotes.update(Tester.testType);
    }
  }
});

// Stop user from copy/pasting the quote into the text input (that's cheating)
Tester.input.addEventListener("paste", (e) => e.preventDefault());

Tester.backButton.addEventListener("click", (e) => {
  e.preventDefault();

  /**
   * If the test has not started yet (the timer handler is still null)
   * stop the test upon clicking the back button.
   */
  if (Timer.handler === null) {
    Tester.testType = null;
    Tester.stopTest({
      disableInput: true,
    });
    return Page.toggle("home");
  }

  // Else, ask the user if they want to stop the test.
  Dialog.show({
    title: "<h3 class='txt-center txt-lg'>Stop Test?</h3>",
    contents:
      "<p class='txt-center txt-md p-1'>The test is in progress, are you sure you want to stop?</p>",
    confirmButtonText: "Yes",
    showCancelButton: true,
    cancelButtonText: "No",
    onConfirm: () => {
      Tester.stopTest({
        disableInput: true,
      });
      Page.toggle("home");
    },
    onCancel: () => {
      Tester.input.focus();
      Timer.resume(Tester.countDown);
    },
  });
  return Timer.pause();
});

// Construct the dialog elements
Dialog.construct();
