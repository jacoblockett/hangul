import { medialLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const medialHash = hash(medialLetters)

/**
 * Checks if the given value is a non-compatibility, medial vowel.
 *
 * @example
 * isMedial("ᅡ") // true
 * isMedial("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isMedial(value) {
	return value in medialHash
}
