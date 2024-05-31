import { toFortisMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toFortisHash = hash(toFortisMap, { conversionMap: true })
const toInitialFortisIndexHash = {
	0: 1,
	15: 1,
	3: 4,
	16: 4,
	7: 8,
	17: 8,
	10: 9,
	12: 13,
	14: 13,
}
const toFinalFortisIndexHash = {
	1: 2,
	24: 2,
	25: 7,
	26: 17,
	20: 19,
	23: 22,
}

/**
 * Converts all consonants into their fortis (tensed) form.
 *
 * @example
 * toFortis("ㄱ") // "ㄲ"
 * toFortis("ㄲ") // "ㄲ"
 * toFortis("한국") // "한꾺"
 *
 * @param {string} str The string to convert all consonants to fortis (tensed)
 * @returns {string}
 */
export default function toFortis(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		const charCode = char.codePointAt(0)

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			const newInitialIndex = toInitialFortisIndexHash[initialIndex] || initialIndex
			const newFinalIndex = toFinalFortisIndexHash[finalIndex] || finalIndex

			result.push(
				String.fromCodePoint(newInitialIndex * 588 + medialIndex * 28 + newFinalIndex + 0xac00)
			)
		} else {
			result.push(toFortisHash[char] || char)
		}
	}

	return result.join("")
}
