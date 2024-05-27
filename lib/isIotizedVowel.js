import { iotizedVowelLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const iotizedVowelHash = hash(iotizedVowelLetters)

/**
 * Checks if the given value is an iotized vowel, one that begins with the /j/ phoneme.
 *
 * @example
 * isIotizedVowel("ㅑ") // true
 * isIotizedVowel("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isIotizedVowel(value) {
	return value in iotizedVowelHash
}
