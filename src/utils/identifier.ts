/**
 * This function can return the user's identification to show
 * in test result dialog based on the numbers of words or letters
 * they typed and returns an object containing the identification
 * name and emoji of the animal.
 */

import Identities from "../data/identities";

export default function getIdentity(words: number, testType?: number) {
	let id;
	let required = testType !== 1 ? Math.floor(words / 2) : words;

	for (id = Identities.length - 1; id >= 0; id--) {
		if (required >= Identities[id].requiredWords) {
			break;
		}
	}

	return {
		identName: Identities[id].name,
		identEmoji: Identities[id].emoji,
	};
}
