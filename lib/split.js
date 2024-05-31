import {
	initialLetters,
	medialLetters,
	finalLetters,
	initialSplitCompatLetters,
	medialSplitCompatLetters,
	finalSplitCompatLetters,
	initialCompatLetters,
	medialCompatLetters,
	finalCompatLetters,
	initialSplitLetters,
	medialSplitLetters,
	finalSplitLetters,
} from "../utils/chars.js"
import hash from "../utils/hash.js"

const initialHash = hash(initialLetters)
const medialHash = hash(medialLetters)
const finalHash = hash(finalLetters)

/**
 * Splits the given string, deconstructing all of the hangul syllables into their constituent letters.
 *
 * @example
 * split("하다") // => ["ㅎ", "ㅏ", "ㄷ", "ㅏ"]
 * split("했다") // => ["ㅎ", "ㅐ", "ㅆ", "ㄷ", "ㅏ"]
 * split("했다", { decouple: true, compatibility: false }) // => ["ᄒ", "ᅢ", "ᆺ", "ᆺ", "ᄃ", "ᅡ"]
 *
 * @param {string} str The string to split
 * @param {object} [options]
 * @param {boolean} [options.group] Groups each syllable/grapheme into its own array (default: `false`)
 * @param {boolean} [options.decouple] Decomposes composite letters into their constituent letters (default: `false`)
 * @param {boolean} [options.compatibility] Converts all letters from non-compatibility letters to compatibility letters (default: `true`)
 * @returns {string[]|string[][]}
 */
export default function split(str, options = {}) {
	if (typeof str !== "string") throw new TypeError(`Expected str to be a string`)

	if (!options || options.constructor !== Object) options = {}
	if (typeof options.group !== "boolean") options.group = false
	if (typeof options.decouple !== "boolean") options.decouple = false
	if (typeof options.compatibility !== "boolean") options.compatibility = true

	let result = []

	for (let char of str) {
		const charCode = char.codePointAt(0)

		let temp = []

		if (0xac00 <= charCode && charCode <= 0xd7a3) {
			const base = charCode - 0xac00
			const initialIndex = ~~(base / 588)
			const medialIndex = ~~((base % 588) / 28)
			const finalIndex = base % 28
			let initial, medial, final

			if (options.compatibility && options.decouple) {
				initial = initialSplitCompatLetters[initialIndex]
				medial = medialSplitCompatLetters[medialIndex]
				final = finalSplitCompatLetters[finalIndex]
			} else if (options.compatibility) {
				initial = initialCompatLetters[initialIndex]
				medial = medialCompatLetters[medialIndex]
				final = finalCompatLetters[finalIndex]
			} else if (options.decouple) {
				initial = initialSplitLetters[initialIndex]
				medial = medialSplitLetters[medialIndex]
				final = finalSplitLetters[finalIndex]
			} else {
				initial = initialLetters[initialIndex]
				medial = medialLetters[medialIndex]
				final = finalLetters[finalIndex]
			}

			if (typeof initial === "string") {
				temp.push(initial)
			} else {
				temp = temp.concat(initial)
			}

			if (typeof medial === "string") {
				temp.push(medial)
			} else {
				temp = temp.concat(medial)
			}

			if (final) {
				if (typeof final === "string") {
					temp.push(final)
				} else {
					temp = temp.concat(final)
				}
			}
		} else if (options.compatibility && char in initialHash) {
			if (options.decouple) char = initialSplitLetters[charCode - 0x1100]

			if (typeof char === "string") {
				temp.push(char)
			} else {
				temp = temp.concat(char)
			}
		} else if (options.compatibility && char in medialHash) {
			if (options.decouple) char = medialSplitLetters[charCode - 0x1161]

			if (typeof char === "string") {
				temp.push(char)
			} else {
				temp = temp.concat(char)
			}
		} else if (options.compatibility && char in finalHash) {
			if (options.decouple) char = finalSplitLetters[charCode - 0x11a8 - 1]

			if (typeof char === "string") {
				temp.push(char)
			} else {
				temp = temp.concat(char)
			}
		} else {
			temp = [char]
		}

		if (options.group) {
			result.push(temp)
		} else {
			result = result.concat(temp)
		}
	}

	return result
}
