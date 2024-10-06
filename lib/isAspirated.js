import { aspiratedLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const aspiratedHash = hash(aspiratedLetters)

/**
 * Checks if the given value is an aspirated consonant.
 *
 * @example
 * isAspirated("ㅋ") // true
 * isAspirated("ㄱ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isAspirated(value) {
	return value in aspiratedHash
}
