import compatibilityLetters from "./rune_maps/compatibilityLetters.js"
import initialLetters from "./rune_maps/initialLetters.js"
import medialLetters from "./rune_maps/medialLetters.js"
import finalLetters from "./rune_maps/finalLetters.js"
import compositeLetters from "./rune_maps/compositeLetters.js"
import consonants from "./rune_maps/consonants.js"
import vowels from "./rune_maps/vowels.js"
import doubleConsonants from "./rune_maps/doubleConsonants.js"
import iotizedVowels from "./rune_maps/iotizedVowels.js"
import toCompatibilityLetter from "./rune_maps/toCompatibilityLetter.js"
import deconstructBlock from "./utils/deconstructBlock.js"

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
 * @param {boolean} options.group Groups each found syllable in its own array
 * @param {boolean} options.decouple Decomposes composite letters (i.e. ㄲ, ㄵ, etc.) into individual letters
 * @param {boolean} options.compatibility Converts the deconstructed letters into their compatibility form
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

export function construct(value, options = {}) {
	//
}
