import { initialLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const initialHash = hash(initialLetters)

/**
 * Checks if the given value is a non-compatibility, initial consonant.
 *
 * @example
 * isInitial("ᄀ") // true
 * isInitial("ㄱ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isInitial(value) {
	return value in initialHash
}
