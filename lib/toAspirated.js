import { toAspiratedMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toAspiratedHash = hash(toAspiratedMap, { conversionMap: true })
const toInitialAspiratedIndexHash = {
	0: 15,
	1: 15,
	3: 16,
	4: 16,
	7: 17,
	8: 17,
	9: 10,
	12: 14,
	13: 14,
}
const toFinalAspiratedIndexHash = {
	1: 24,
	2: 24,
	7: 25,
	17: 26,
	19: 20,
	22: 23,
}

/**
 * Converts all consonants into their aspirated form.
 *
 * @example
 * toAspirated("ㄱ") // "ㅋ"
 * toAspirated("ㄲ") // "ㅋ"
 * toAspirated("한국") // "한쿸"
 *
 * @param {string} str The string to convert all consonants to aspirated
 * @returns {string}
 */
export default function toAspirated(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		const charCode = char.codePointAt(0)

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			const newInitialIndex = toInitialAspiratedIndexHash[initialIndex] || initialIndex
			const newFinalIndex = toFinalAspiratedIndexHash[finalIndex] || finalIndex

			result.push(
				String.fromCodePoint(newInitialIndex * 588 + medialIndex * 28 + newFinalIndex + 0xac00)
			)
		} else {
			result.push(toAspiratedHash[char] || char)
		}
	}

	return result.join("")
}
