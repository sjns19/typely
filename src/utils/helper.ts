/** A function to randomize array items (used for randomizing paragraphs) */
export const shuffleArray = (array: string[]) => {
	let idx = array.length;
	let randIdx;

	while (idx != 0) {
		randIdx = Math.floor(Math.random() * idx);
		idx--;
		[array[idx], array[randIdx]] = [array[randIdx], array[idx]];
	}

	return array;
};

/** Just a function to return random characters or numbers */
export const getRandomChar = (isNumber = false) => {
	let char = isNumber ? "0123456789" : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return char[Math.floor(Math.random() * char.length)];
};

/** A custom function to create virtual elements */
export const createElem = (name: string, className?: string, appendTo?: HTMLElement) => {
	const element = document.createElement(name);

	if (className) {
		element.className += className;
	}

	if (appendTo) {
		appendTo.appendChild(element);
	}

	return element;
}