/**
 * Checks if the given value is a Hangul syllable block.
 *
 * @example
 * isSyllable("한") // => true
 * isSyllable("ㅎ") // => false
 *
 * @param {value} value The value to check
 * @returns {boolean}
 */
export default function isSyllable(value) {
	if (typeof value !== "string" || value.length > 1) return false

	const charCode = value.codePointAt(0)

	if (0xac00 <= charCode && charCode <= 0xd7a3) return true

	return false
}
