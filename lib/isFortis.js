import { fortisLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const fortisHash = hash(fortisLetters)

/**
 * Checks if the given value is a fortis (tensed) consonant.
 *
 * @example
 * isFortis("ㄲ") // true
 * isFortis("ㄱ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isFortis(value) {
	return value in fortisHash
}
