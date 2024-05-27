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
 * @param {object} [options] An options object to customize the return (default = `{ strict: false }`)
 * @param {boolean} options.strict Disallows symbols and numbers from being considered valid Hangul characters
 * @returns {boolean}
 */
export default function isHangul(value, options = {}) {
	if (typeof value !== "string") return false
	if (!options || options.constructor !== Object) options = {}

	options.strict = typeof options.strict === "boolean" ? options.strict : false

	if (options.strict) {
		return /^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2]+$/u.test(value)
	} else {
		return /^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2\P{L}]+$/u.test(
			value
		)
	}
}
