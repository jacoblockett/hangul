import { vowelLetters, compatLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const compatHash = hash(compatLetters)
const vowelHash = hash(vowelLetters)

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
	return value in vowelHash && value in compatHash
}
