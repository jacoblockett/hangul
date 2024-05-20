import compatibilityLetters from "./char_maps/compatibilityLetters.js"
import initialLetters from "./char_maps/initialLetters.js"
import medialLetters from "./char_maps/medialLetters.js"
import finalLetters from "./char_maps/finalLetters.js"
import compositeLetters from "./char_maps/compositeLetters.js"
import consonants from "./char_maps/consonants.js"
import vowels from "./char_maps/vowels.js"
import doubleConsonants from "./char_maps/doubleConsonants.js"
import iotizedVowels from "./char_maps/iotizedVowels.js"
import toCompatibilityLetter from "./char_maps/toCompatibilityLetter.js"
import deconstructBlock from "./utils/deconstructBlock.js"
import constructBlock from "./utils/constructBlock.js"
import toCompositeLetters from "./char_maps/toCompositeLetters.js"
import toFinalLetter from "./char_maps/toFinalLetter.js"
import toInitialLetter from "./char_maps/toInitialLetter.js"
import toMedialLetter from "./char_maps/toMedialLetter.js"

const blockRangeStart = 0xac00 // 가
const blockRangeEnd = 0xd7a3 // 힣
const compatibilityRangeStart = 0x3131 // ㄱ
const compatibilityRangeEnd = 0x3164 // Hangul Filler
const initialRangeStart = 0x1100 // ᄀ
const initialRangeEnd = 0x1112 // ᄒ
const medialRangeStart = 0x1161 // ᅡ
const medialRangeEnd = 0x1175 // ᅵ
const finalRangeStart = 0x11a8 // ᆨ
const finalRangeEnd = 0x11c2 // ᇂ

/**
 * Checks if the given value is a compatibility letter.
 *
 * @example
 * isCompatibilityLetter("ㄱ") // true
 * isCompatibilityLetter("ᄀ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isCompatibilityLetter(value) {
	return !!compatibilityLetters[value]
}

/**
 * Checks if the given value is a consonant.
 *
 * @example
 * isConsonant("ㄱ") // true
 * isConsonant("ᄀ") // true
 * isConsonant("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isConsonant(value) {
	return !!consonants[value]
}

/**
 * Checks if the given value is a consonant cluster.
 *
 * @example
 * isConsonantCluster("ㄲ") // true
 * isConsonantCluster("ᄁ") // true
 * isConsonantCluster("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isConsonantCluster(value) {
	return !!(consonants[value] && compositeLetters[value])
}

/**
 * Checks if the given value is a diphthong.
 *
 * @example
 * isDiphthong("ㅘ") // true
 * isDiphthong("ᅪ") // true
 * isDiphthong("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isDiphthong(value) {
	return !!(vowels[value] && compositeLetters[value])
}

/**
 * Checks if the given value is a double consonant.
 *
 * @example
 * isDoubleConsonant("ㄲ") // true
 * isDoubleConsonant("ᄁ") // true
 * isDoubleConsonant("ㄵ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isDoubleConsonant(value) {
	return !!doubleConsonants[value]
}

/**
 * Checks if the given value is a non-compatibility, final consonant.
 *
 * @example
 * isFinal("ᆨ") // true
 * isFinal("ㄲ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isFinal(value) {
	return !!finalLetters[value]
}

/**
 * Checks if the given value is hangul. When strict mode is set to true
 * the function will return false if any non-letters are found (e.g. 1, 2, 3, !, ?, etc.).
 *
 * @example
 * isHangul("안녕하세요!") // => true
 * isHangul("Hi 안녕하세요!") // => false
 * isHangul("안녕하세요!", { strict: true }) // => false
 *
 * @param {unknown} value The value to check
 * @param {{strict: boolean}} [options] An options object to customize the return (default = `{ strict: false }`)
 * @returns
 */
export function isHangul(value, options = {}) {
	if (typeof value !== "string") return false
	if (!options || options.constructor !== Object) options = {}

	options.strict = typeof options.strict === "boolean" ? options.strict : false

	if (options.strict) {
		return /^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2]+$/u.test(value)
	} else {
		return /^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2\P{L}]+$/u.test(
			value,
		)
	}
}

/**
 * Checks if the given value is a non-compatibility, initial consonant.
 *
 * @example
 * isInitial("ㄲ") // true
 * isInitial("ㄲ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isInitial(value) {
	return !!initialLetters[value]
}

/**
 * Checks if the given value is a non-compatibility, initial consonant.
 *
 * @example
 * isIotizedVowel("ㅑ") // true
 * isIotizedVowel("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isIotizedVowel(value) {
	return !!iotizedVowels[value]
}

/**
 * Checks if the given value is a non-compatibility, medial vowel.
 *
 * @example
 * isMedial("ᅡ") // true
 * isMedial("ㅏ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isMedial(value) {
	return !!medialLetters[value]
}

/**
 * Checks if the given value is a hangul syllable.
 *
 * @example
 * isSyllable("한") // => true
 * isSyllable("ㅎ") // => false
 *
 * @param {value} value The value to check
 * @returns {boolean}
 */
export function isSyllable(value) {
	if (typeof value !== "string" || value.length > 1) return false

	const codepoint = value.codePointAt(0)

	if (codepoint >= 0xac00 && codepoint <= 0xd7a3) return true

	return false
}

/**
 * Checks if the given value is a vowel.
 *
 * @example
 * isVowel("ᅡ") // true
 * isVowel("ㅏ") // true
 * isVowel("ㄱ") // false
 *
 * @param {unknown} value The value to check
 * @returns {boolean}
 */
export function isVowel(value) {
	return !!vowels[value]
}

/**
 * Deconstructs all of the hangul syllables in the given string into their constituent letters.
 *
 * @example
 * deconstruct("하다") // => ["ㅎ", "ㅏ", "ㄷ", "ㅏ"]
 * deconstruct("했다") // => ["ㅎ", "ㅐ", "ㅆ", "ㄷ", "ㅏ"]
 * deconstruct("했다", {
 *  decouple: true,
 *  compatibility: false
 * }) // => ["ᄒ", "ᅢ", "ᆺ", "ᆺ", "ᄃ", "ᅡ"]
 *
 * @param {string} value The value to deconstruct
 * @param {object} [options]
 * @param {boolean} options.group Groups each found syllable in its own array (default = `false`)
 * @param {boolean} options.decouple Decomposes composite letters (i.e. ㄲ, ㄵ, etc.) into individual letters (default = `false`)
 * @param {boolean} options.compatibility Converts the deconstructed letters into their compatibility form (default = `true`)
 * @returns {string[]|string[][]}
 */
export function deconstruct(value, options = {}) {
	if (typeof value !== "string") throw new TypeError(`Expected value to be a string`)
	if (!options || options.constructor !== Object) options = {}

	options.group = typeof options.group === "boolean" ? options.group : false
	options.decouple = typeof options.decouple === "boolean" ? options.decouple : false
	options.compatibility = typeof options.compatibility === "boolean" ? options.compatibility : true

	const result = []

	for (const char of value) {
		let deconstructed

		try {
			deconstructed = deconstructBlock(char)
		} catch (error) {
			if (error.code === "INVALID_HANGUL_SYLLABLE") {
				deconstructed = [char]
			} else {
				throw error
			}
		}

		if (options.decouple) {
			deconstructed = deconstructed.reduce((pre, cur) => {
				const constituents = compositeLetters[cur]

				if (constituents) return [...pre, ...constituents]

				return [...pre, cur]
			}, [])
		}

		if (options.compatibility) {
			deconstructed = deconstructed.map(char => toCompatibilityLetter[char] || char)
		}

		if (options.group) {
			result.push(deconstructed)
		} else {
			result.push(...deconstructed)
		}
	}

	return result
}

/**
 * Constructs the given string into valid hangul syllables. When deconstruct is true, `construct`
 * will build the new string by mimicing typing using the dubeolsik (두벌식) layout.
 * When it's false, `construct` will consider each character as pre-built and not attempt to rebuild
 * by letter. See example so that this concept is more clear.
 *
 * @note `construct` will always convert any non-compatibility letters into compatibility letters
 *
 * @example
 * construct("ㅎㅏㄴ") // => 한
 * construct("ㄱ가") // => 까
 * construct("ㄱ가", { deconstruct: false }) // => ㄱ가
 *
 * @param {string} value The value to construct
 * @param {object} options
 * @param {boolean} deconstruct Deconstructs the string before parsing (default = true)
 * @returns {string}
 */
export function construct(value, options = {}) {
	if (typeof value !== "string") throw new TypeError(`Expected value to be a string`)
	if (!options || options.constructor !== Object) options = {}

	options.deconstruct = typeof options.deconstruct === "boolean" ? options.deconstruct : true

	const characters = options.deconstruct ? deconstruct(value) : [...value.normalize()]
	const syllable = []
	const result = []

	function pushSyllable() {
		if (syllable.length > 1) {
			result.push(constructBlock(...syllable))
			syllable.length = 0
		} else if (syllable.length === 1) {
			result.push(...syllable)
			syllable.length = 0
		}
	}

	while (characters.length) {
		const char = characters.shift()

		if (!isHangul(char, { strict: true })) {
			// If the current char isn't hangul, process the syllable, push the char
			// and reset
			pushSyllable()
			result.push(char)
		} else if (!options.deconstruct && isSyllable(char)) {
			// If the current char is a syllable block (in non-deconstructive mode),
			// process the syllable, push the char, and reset
			pushSyllable()
			result.push(char)
		} else if (syllable.length === 3) {
			// If the syllable already has 3 characters, check if the current char
			// and the final char of the syllable can be made into a composite letter
			const compatChar = toCompatibilityLetter[char] || char
			const composite = toCompositeLetters[`${syllable[2]}${compatChar}`]

			if (composite) {
				syllable[2] = composite
				pushSyllable()
			} else {
				pushSyllable()
				syllable.push(compatChar)
			}
		} else if (syllable.length === 2) {
			// If the syllable has two letters,
			// 1. check if a composite vowel can be made
			// 2. check if a valid final letter can be pushed.
			// 3. check if the current char is a valid initial letter
			const compatChar = toCompatibilityLetter[char] || char
			const composite = toCompositeLetters[`${syllable[1]}${compatChar}`]

			if (composite) {
				syllable[1] = composite
			} else if (toFinalLetter[compatChar]) {
				syllable.push(compatChar)
			} else {
				pushSyllable()

				if (toInitialLetter[compatChar]) {
					syllable.push(compatChar)
				} else {
					result.push(char) // should this push compatChar? needs testing.
				}
			}
		} else if (syllable.length === 1) {
			// If the syllable has one letter,
			// 1. check if a composite initial letter can be made
			// 2. check if a valid medial letter can be pushed
			// 3. check if the current char is a valid inital letter
			const compatChar = toCompatibilityLetter[char] || char
			const composite = toCompositeLetters[`${syllable[0]}${compatChar}`]

			if (composite) {
				syllable[0] = composite
			} else if (toMedialLetter[compatChar]) {
				syllable.push(compatChar)
			} else {
				pushSyllable()

				if (toInitialLetter[compatChar]) {
					syllable.push(compatChar)
				} else {
					result.push(char) // should this push compatChar? needs testing.
				}
			}
		} else {
			// If no letters yet, check if the current char is a valid initial letter
			const compatChar = toCompatibilityLetter[char] || char

			if (toInitialLetter[compatChar]) {
				syllable.push(compatChar)
			} else {
				result.push(char) // should this push compatChar? needs testing.
			}
		}
	}

	pushSyllable()

	return result.join("")
}
