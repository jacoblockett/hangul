import { lenisLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const lenisHash = hash(lenisLetters)

/**
 * Checks if the given value is a lenis (soft) consonant.
 *
 * @example
 * isLenis("ㄱ") // true
 * isLenis("ㄲ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isLenis(value) {
	return value in lenisHash
}
