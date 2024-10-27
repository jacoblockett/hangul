/**
 * Checks if the given value contains only Hangul characters. By default, symbols
 * and numbers are allowed to pass. Use the `options.strict` boolean to disallow
 * this behavior.
 *
 * @example
 * isHangul("안녕하세요!") // => true
 * isHangul("안녕하세요!", { strict: true }) // => false
 *
 * @param {unknown} value The value to check
 * @param {object} [options]
 * @param {boolean} [options.strict] Disallows symbols and numbers from being considered valid Hangul characters (default: `false`)
 * @returns {boolean}
 */
export default function isHangul(value, options = {}) {
	if (typeof value !== "string") return false

	if (!options || options.constructor !== Object) options = {}
	if (typeof options.strict !== "boolean") options.strict = false

	if (options.strict) {
		return /^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2]+$/u.test(value)
	} else {
		return /^[\uac00-\ud7a3\u3131-\u3164\u1100-\u1112\u1161-\u1175\u11a8-\u11c2\P{L}]+$/u.test(
			value
		)
	}
}
