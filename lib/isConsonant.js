import { consonantLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const consonantHash = hash(consonantLetters)

/**
 * Checks if the given value is a consonant.
 *
 * @example
 * isConsonant("ㄱ") // true
 * isConsonant("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isConsonant(value) {
	return value in consonantHash
}
