import { toFinalMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toFinalHash = hash(toFinalMap, { conversionMap: true })

/**
 * Converts all consonants into their final form.
 *
 * @example
 * toFinal("ㄱ") // "ᆨ"
 * toFinal("ㄲ") // "ᆩ"
 *
 * @param {string} str The string to convert all consonants to final form
 * @returns {string}
 */
export default function toFinal(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		result.push(toFinalHash[char] || char)
	}

	return result.join("")
}
