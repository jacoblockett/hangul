import { toCompatMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toCompatHash = hash(toCompatMap, { conversionMap: true })

/**
 * Converts all letters into their compatibility form.
 *
 * @example
 * toCompatibility("ᆨ") // "ㄱ"
 * toCompatibility("ᆩ") // "ㄲ"
 *
 * @param {string} str The string to convert all letters to compatibility form
 * @returns {string}
 */
export default function toCompatibility(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		result.push(toCompatHash[char] || char)
	}

	return result.join("")
}
