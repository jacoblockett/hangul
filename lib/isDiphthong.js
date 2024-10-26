import { vowelLetters, compositeLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const vowelHash = hash(vowelLetters)
const compositeHash = hash(compositeLetters)

/**
 * Checks if the given value is a diphthong, a cluster of two vowels as one letter.
 *
 * @example
 * isDiphthong("ㅘ") // true
 * isDiphthong("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isDiphthong(value) {
	return value in vowelHash && value in compositeHash
}
