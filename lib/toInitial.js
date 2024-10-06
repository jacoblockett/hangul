import { toInitialMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toInitialHash = hash(toInitialMap, { conversionMap: true })

/**
 * Converts all consonants into their initial form.
 *
 * @example
 * toInitial("ㄱ") // "ᄀ"
 * toInitial("ㄲ") // "ᄁ"
 *
 * @param {string} str The string to convert all consonants to initial form
 * @returns {string}
 */
export default function toInitial(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		result.push(toInitialHash[char] || char)
	}

	return result.join("")
}
