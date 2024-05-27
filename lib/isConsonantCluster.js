import { consonantLetters, compositeLetters } from "../utils/chars.js"
import hash from "../utils/hash.js"

const consonantHash = hash(consonantLetters)
const compositeHash = hash(compositeLetters)

/**
 * Checks if the given value is a consonant cluster.
 *
 * @example
 * isConsonantCluster("ㄲ") // true
 * isConsonantCluster("ᄁ") // true
 * isConsonantCluster("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export default function isConsonantCluster(value) {
	return value in consonantHash && value in compositeHash
}
