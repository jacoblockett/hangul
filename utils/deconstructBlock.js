/**
 * Desconstructs the given syllable into its letter components. Will always return non-compatibility
 * letters.
 *
 * @param {string} syllable The hangul block to desconstruct
 * @returns {[initialLetter: string, medialLetter: string, finalLetter: string]}
 */
const deconstructBlock = syllable => {
	if (typeof syllable !== "string") throw new TypeError(`Expected syllable to be a string`)

	syllable = syllable.normalize()

	const invalidError = new Error(`Expected syllable to be a valid hangul block`)
	invalidError.code = "INVALID_HANGUL_SYLLABLE"

	const codepoint = syllable.codePointAt(0)

	if (syllable.length > 1 || codepoint < 0xac00 || codepoint > 0xd7a3) throw invalidError

	const base = codepoint - 0xac00
	const initialIndex = ~~(base / 588)
	const medialIndex = ~~((base % 588) / 28)
	const finalIndex = ~~(base % 28)
	const initial = String.fromCodePoint(initialIndex + 0x1100)
	const medial = String.fromCodePoint(medialIndex + 0x1161)
	const final = finalIndex ? String.fromCodePoint(finalIndex + 0x11a8 - 1) : 0

	const result = [initial, medial]

	if (final) result.push(final)

	return result
}

export default deconstructBlock
