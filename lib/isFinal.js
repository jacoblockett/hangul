import { finalLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const finalHash = hash(finalLetters)

/**
 * Checks if the given value is a non-compatibility, final consonant.
 *
 * @example
 * isFinal("ᆨ") // true
 * isFinal("ㄲ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isFinal(value) {
	return value in finalHash
}
