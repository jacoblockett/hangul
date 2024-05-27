import { vowelLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const vowelHash = hash(vowelLetters)

/**
 * Checks if the given value is a vowel.
 *
 * @example
 * isVowel("ㅏ") // true
 * isVowel("ㄱ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isVowel(value) {
	return value in vowelHash
}
