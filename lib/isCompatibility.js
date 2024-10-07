import { compatLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const compatHash = hash(compatLetters)

/**
 * Checks if the given value is a compatibility letter.
 *
 * @example
 * isCompatibility("ㄱ") // true
 * isCompatibility("ᄀ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isCompatibility(value) {
	return value in compatHash
}
