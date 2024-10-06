import { finalCompatLetters, finalLetters } from "../utils/chars.js"
import isSyllable from "./isSyllable.js"

/**
 * Extracts the final letter from the given Hangul syllable block.
 *
 * @example
 * getFinal("한") // "ㄴ"
 * getFinal("한", { compatibility: false }) // "ᆫ"
 * getFinal("하") // ""
 *
 * @param {string} syllable The syllable block to extract the final letter from
 * @param {object} [options]
 * @param {boolean} [options.compatibility] Converts the final letter into its compatibility form (default: `true`)
 * @returns {string}
 */
export default function getFinal(syllable, options = {}) {
	if (typeof syllable !== "string") throw new TypeError("Expected syllable to be a string")

	if (!options || options.constructor !== Object) options = {}
	if (typeof options.compatibility !== "boolean") options.compatibility = true

	if (!isSyllable(syllable)) return ""

	const charCode = syllable.codePointAt(0)
	const finalIndex = (charCode - 0xac00) % 28

	if (options.compatibility) {
		return finalCompatLetters[finalIndex]
	} else {
		return finalLetters[finalIndex]
	}
}
