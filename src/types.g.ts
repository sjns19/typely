/** Type declaration for the Page object */
export type Page = {
	browserHeader: HTMLMetaElement, //document.getElementById("browser-header"),
	themeToggler?: HTMLLIElement, //document.querySelector(".js-theme-btn"),
	themeTogglerIcon: HTMLElement,
	applyTheme: (save: boolean) => void,
	loadTheme: () => void
};

/** Type declaration for the Test object */
export type Tester = {
	testType?: number,
	typedWordList: string[],
	input: HTMLInputElement,
	backButton: HTMLButtonElement,
	startButtons: HTMLButtonElement[],
	startTest: (testType?: number) => void,
	stopTest: (options: any) => void,
	onInput: (e: Event) => void,
	confirmCancellation: (e: MouseEvent) => void,
	countDown: () => void,
	showFinalResult: () => void
};

/** Type declaration for the Words object */
export type Words = {
	totalCorrected: number,
	totalIncorrected: number,
	corrected: number,
	incorrected: number,
	accuracy: number,
	typedChars: number,
	list: string[],
	accuracyContainer: HTMLParagraphElement,
	correctedContainer: HTMLParagraphElement,
	incorrectedContainer: HTMLParagraphElement,
	init: () => void,
	getStats: () => ({
		totalCorrected: number,
		totalIncorrected: number,
		accuracy: number,
	}),
	updateStats: () => void,
	reset: () => void
};

/** Type delcaration for the Timer object */
export type Timer = {
	handler?: ReturnType<typeof setInterval>,
	counter: number,
	initial: number,
	duration: number,
	container: HTMLParagraphElement,
	init: () => void,
	start: (func: () => void) => void,
	stop: () => void,
	pause: () => void,
	resume: (func: () => void) => void,
};

/** Type declaration for the Quotes object */
export type Quotes = {
	index: number,
	list: string[],
	currentQuote: string[] | string,
	container: HTMLParagraphElement,
	init: (testType?: number) => void,
	update: (testType?: number) => void,
	create: (word: string[] | string) => void
};

/** Type delcaration for the Dialog object */
export type Dialog = {
	documentBody: HTMLBodyElement,
	header?: HTMLDivElement,
	body?: HTMLDivElement,
	footer?: HTMLDivElement,
	confirmButton?: HTMLButtonElement,
	cancelButton?: HTMLButtonElement,
	confirmCallback?: () => void,
	cancelCallback?: () => void,
	construct: () => void,
	hide: () => void,
	show: (data: any) => void
}