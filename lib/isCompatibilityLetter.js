import { compatLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const compatHash = hash(compatLetters)

/**
 * Checks if the given value is a compatibility letter.
 *
 * @example
 * isCompatibilityLetter("ㄱ") // true
 * isCompatibilityLetter("ᄀ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isCompatibilityLetter(value) {
	return value in compatHash
}
