import { toSingleConsonantMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toSingleConsonantHash = hash(toSingleConsonantMap, { conversionMap: true })
const toInitialSingleConsonantIndexHash = {
	0: 1,
	3: 4,
	7: 8,
	9: 10,
	12: 13,
}
const toFinalSingleConsonantIndexHash = {
	1: 2,
	19: 20,
}

/**
 * Converts all consonants into their single consonant form.
 *
 * @example
 * toSingleConsonant("ㄱ") // "ㄱ"
 * toSingleConsonant("ㄲ") // "ㄱ"
 * toSingleConsonant("까") // "가"
 *
 * @param {string} str The string to convert all consonants to single consonant form
 * @returns {string}
 */
export default function toSingleConsonant(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		const charCode = char.codePointAt(0)

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			const newInitialIndex = toInitialSingleConsonantIndexHash[initialIndex] || initialIndex
			const newFinalIndex = toFinalSingleConsonantIndexHash[finalIndex] || finalIndex

			result.push(
				String.fromCodePoint(newInitialIndex * 588 + medialIndex * 28 + newFinalIndex + 0xac00)
			)
		} else {
			result.push(toSingleConsonantHash[char] || char)
		}
	}

	return result.join("")
}
