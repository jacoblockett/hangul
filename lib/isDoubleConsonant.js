import { doubleConsonantLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const doubleConsonantHash = hash(doubleConsonantLetters)

/**
 * Checks if the given value is a double consonant.
 *
 * @example
 * isDoubleConsonant("ㄲ") // true
 * isDoubleConsonant("ᄁ") // true
 * isDoubleConsonant("ㄵ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isDoubleConsonant(value) {
	return value in doubleConsonantHash
}
