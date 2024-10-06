import { toMedialMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toMedialHash = hash(toMedialMap, { conversionMap: true })

/**
 * Converts all vowels into their medial form.
 *
 * @example
 * toMedial("ㅏ") // "ᅡ"
 * toMedial("ㅔ") // "ᅦ"
 *
 * @param {string} str The string to convert all vowels to medial form
 * @returns {string}
 */
export default function toMedial(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		result.push(toMedialHash[char] || char)
	}

	return result.join("")
}
