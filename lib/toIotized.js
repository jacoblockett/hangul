import { toIotizedMap } from "../utils/chars.js"
import hash from "../utils/hash.js"

const toIotizedHash = hash(toIotizedMap, { conversionMap: true })
const toIotizedIndexHash = {
	0: 2,
	1: 3,
	4: 6,
	5: 7,
	8: 12,
	13: 17,
}

/**
 * Converts all vowels that can be iotized within the given string.
 *
 * @example
 * toIotized("ㅏ") // "ㅑ"
 * toIotized("한국") // "햔귝"
 *
 * @param {string} str The string to convert all iotizable vowels
 * @returns {string}
 */
export default function toIotized(str) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")

	const result = []

	for (const char of str) {
		const charCode = char.codePointAt(0)

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			const newMedialIndex = toIotizedIndexHash[medialIndex] || medialIndex

			result.push(
				String.fromCodePoint(initialIndex * 588 + newMedialIndex * 28 + finalIndex + 0xac00)
			)
		} else {
			result.push(toIotizedHash[char] || char)
		}
	}

	return result.join("")
}
