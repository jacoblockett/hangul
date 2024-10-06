import { toDoubleConsonantMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toDoubleConsonantHash = hash(toDoubleConsonantMap, { conversionMap: true })
const toInitialDoubleConsonantIndexHash = {
	0: 1,
	3: 4,
	7: 8,
	9: 10,
	12: 13,
}
const toFinalDoubleConsonantIndexHash = {
	1: 2,
	19: 20,
}

/**
 * Converts all consonants into their double consonant form.
 *
 * @example
 * toDoubleConsonant("ㄱ") // "ㄱ"
 * toDoubleConsonant("ㄲ") // "ㄱ"
 * toDoubleConsonant("가") // "까"
 *
 * @param {string} str The string to convert all consonants to double consonant form
 * @returns {string}
 */
export default function toDoubleConsonant(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		const charCode = char.codePointAt(0)

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			const newInitialIndex = toInitialDoubleConsonantIndexHash[initialIndex] || initialIndex
			const newFinalIndex = toFinalDoubleConsonantIndexHash[finalIndex] || finalIndex

			result.push(
				String.fromCodePoint(newInitialIndex * 588 + medialIndex * 28 + newFinalIndex + 0xac00)
			)
		} else {
			result.push(toDoubleConsonantHash[char] || char)
		}
	}

	return result.join("")
}
