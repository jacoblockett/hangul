/**
 * Desconstructs the given syllable into its letter components. Will always return non-compatibility
 * letters.
 *
 * @param {string} syllable The hangul block to desconstruct
 * @returns {[initialLetter: string, medialLetter: string, finalLetter: string|undefined]}
 */
export default function deconstructBlock(syllable) {
	if (typeof syllable !== "string") throw new TypeError(`Expected syllable to be a string`)

	// syllable = syllable.normalize() // since this is a utility function, all input
	// is already expected to be normalized given the nature of the functions using this
	// utility function.

	const codepoint = syllable.codePointAt(0)

	if (syllable.length > 1 || codepoint < 0xac00 || codepoint > 0xd7a3)
		throw new Error(`Expected syllable to be a valid hangul block`)

	const baseIndex = codepoint - 0xac00
	const initialIndex = ~~(baseIndex / 588)
	const medialIndex = ~~((baseIndex % 588) / 28)
	const finalIndex = ~~(baseIndex % 28)
	const initial = String.fromCodePoint(initialIndex + 0x1100)
	const medial = String.fromCodePoint(medialIndex + 0x1161)
	const final = finalIndex ? String.fromCodePoint(finalIndex + 0x11a8 - 1) : 0

	const result = [initial, medial]

	if (final) result[2] = final

	return result
}
