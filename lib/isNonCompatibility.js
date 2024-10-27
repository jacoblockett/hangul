import { initialLetters, medialLetters, finalLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const initialHash = hash(initialLetters)
const medialHash = hash(medialLetters)
const finalHash = hash(finalLetters)

/**
 * Checks if the given value is a non-compatibility letter.
 *
 * @example
 * isNonCompatibility("ᅡ") // true
 * isNonCompatibility("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isNonCompatibility(value) {
	// Returning false here because, while an empty string is technically
	// a valid final consonant per spec, but it's a completely unexpected
	// value to return true and would return more false positives than
	// do good.
	if (value === "") return false

	return value in initialHash || value in medialHash || value in finalHash
}
