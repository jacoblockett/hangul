import {
	initialLetters,
	medialLetters,
	finalLetters,
	toCompatMap,
	compatToInitialMap,
	compatToMedialMap,
	compatToFinalMap,
	compatToCompositeMap,
	compositeLetters,
	vowelLetters,
} from "../utils/chars.js"
import hash from "../utils/hash.js"
import split from "./split.js"

const vowelHash = hash(vowelLetters)
const compositeHash = hash(compositeLetters)
const initialHash = hash(initialLetters)
const medialHash = hash(medialLetters)
const finalHash = hash(finalLetters)
const toCompat = hash(toCompatMap, { conversionMap: true })
const compatToInitial = hash(compatToInitialMap, { conversionMap: true })
const compatToMedial = hash(compatToMedialMap, { conversionMap: true })
const compatToFinal = hash(compatToFinalMap, { conversionMap: true })
const compatToComposite = hash(compatToCompositeMap, { conversionMap: true })

/**
 * Joins the given string in a way that would resemble dubeolsik (두벌식) typing. Converts all
 * non-compatibility letters to compatibility letters during this process.
 *
 * `options.split` is an important consideration as it could drastically change the output. When
 * `true`, this function will deconstruct all valid syllable blocks, then evaluate each individual
 * letter as if they were typed separately. When `false`, however, each syllable block will be
 * parsed as-is. See the examples for an illustration of what this actually looks like.
 *
 * @example
 * join("ㅎㅏㄴ") // => 한
 * join("ㄱ가") // => 까
 * join("ㄱ가", { split: false }) // => ㄱ가
 *
 * @param {string} str The string to join
 * @param {object} options
 * @param {boolean} options.split Splits the string before parsing (default: `true`)
 * @returns {string}
 */
export default function join(str, options = {}) {
	if (typeof str !== "string") throw new TypeError(`Expected str to be a string`)
	if (!options || options.constructor !== Object) options = {}

	options.split = typeof options.split === "boolean" ? options.split : true

	const characters = options.split ? split(str) : [...str.normalize()]
	const result = []
	let block = []

	// TODO: figure out how to squeeze more performance out of this

	function pushBlock() {
		if (block.length > 1) {
			const [initial, medial, final] = block
			const initialIndex = initialHash[compatToInitial[initial]]
			const medialIndex = medialHash[compatToMedial[medial]]
			const finalIndex = finalHash[compatToFinal[final]]
			const formedBlock = String.fromCodePoint(
				initialIndex * 588 + medialIndex * 28 + finalIndex + 0xac00
			)

			result.push(formedBlock)
			block = []
		} else if (block.length === 1) {
			result.push(block[0])
			block = []
		}
	}

	for (let i = 0; i < characters.length; i++) {
		const char = characters[i]
		const compatChar = toCompat[char] || char

		if (!/^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2]$/u.test(char)) {
			// If the current char isn't hangul, process the block, push the char
			// and reset
			pushBlock()
			result.push(char)
		} else if (!options.split && isBlock(char)) {
			// If the current char is a syllable block (in non-split mode),
			// process the block, push the char, and reset
			pushBlock()
			result.push(char)
		} else if (block.length === 3) {
			// If the block has three letters,
			// 1. check if a composite final letter can be made
			// 2. check if cur is a vowel and final block letter is valid initial letter
			// 3. check if cur is a vowel and final block composite letter's second letter is
			//    valid initial letter
			// 4. push the block and reset
			const compositeChar = compatToComposite[`${block[2]}${compatChar}`]

			if (compositeChar) {
				block[2] = compositeChar
			} else if (vowelHash[compatChar] && compatToInitial[block[2]]) {
				const initial = block.pop()

				pushBlock()
				block.push(initial, compatChar)
			} else if (vowelHash[compatChar] && compatToInitial[compositeHash[block[2]]?.[1]]) {
				const [final, initial] = compositeHash[block.pop()]

				block.push(final)
				pushBlock()

				block.push(initial, compatChar)
			} else {
				pushBlock()
				block.push(compatChar)
			}
		} else if (block.length === 2) {
			// If the block has two letters,
			// 1. check if a composite vowel can be made
			// 2. check if a valid final letter can be pushed.
			// 3. check if the current char is a valid initial letter
			const composite = compatToComposite[`${block[1]}${compatChar}`]

			if (composite) {
				block[1] = composite
			} else if (compatToFinal[compatChar]) {
				block.push(compatChar)
			} else {
				pushBlock()

				if (compatToInitial[compatChar]) {
					block.push(compatChar)
				} else {
					result.push(char) // should this push compatChar? needs testing.
				}
			}
		} else if (block.length === 1) {
			// If the block has one letter,
			// 1. check if a composite initial letter can be made
			// 2. check if a valid medial letter can be pushed
			// 3. check if the current char is a valid inital letter
			const composite = compatToComposite[`${block[0]}${compatChar}`]

			if (composite) {
				block[0] = composite
			} else if (compatToMedial[compatChar]) {
				block.push(compatChar)
			} else {
				pushBlock()

				if (compatToInitial[compatChar]) {
					block.push(compatChar)
				} else {
					result.push(compatChar)
				}
			}
		} else {
			// If no letters yet, check if the current char is a valid initial letter
			if (compatToInitial[compatChar]) {
				block.push(compatChar)
			} else {
				result.push(compatChar)
			}
		}
	}

	pushBlock()

	return result.join("")
}
