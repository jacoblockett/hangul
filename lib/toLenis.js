import { toLenisMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toLenisHash = hash(toLenisMap, { conversionMap: true })
const toInitialLenisIndexHash = {
	1: 0,
	15: 0,
	4: 3,
	16: 3,
	8: 7,
	17: 7,
	10: 9,
	13: 12,
	14: 12,
}
const toFinalLenisIndexHash = {
	2: 1,
	24: 1,
	25: 7,
	26: 17,
	20: 19,
	23: 22,
}

/**
 * Converts all consonants into their lenis (soft) form.
 *
 * @example
 * toLenis("ㄱ") // "ㅋ"
 * toLenis("ㄲ") // "ㅋ"
 * toLenis("한국") // "한쿸"
 *
 * @param {string} str The string to convert all consonants to lenis (soft)
 * @returns {string}
 */
export default function toLenis(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		const charCode = char.codePointAt(0)

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			const newInitialIndex = toInitialLenisIndexHash[initialIndex] || initialIndex
			const newFinalIndex = toFinalLenisIndexHash[finalIndex] || finalIndex

			result.push(
				String.fromCodePoint(newInitialIndex * 588 + medialIndex * 28 + newFinalIndex + 0xac00)
			)
		} else {
			result.push(toLenisHash[char] || char)
		}
	}

	return result.join("")
}
