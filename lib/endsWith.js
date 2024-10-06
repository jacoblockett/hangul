import split from "./split.js"

/**
 * Checks if the given search string exists at the end of the given operation string.
 *
 * @example
 * endsWith("한글", "글") // true
 * endsWith("한글", "ㅡㄹ") // true
 * endsWith("한글", "한") // false
 * endsWith("늙다", "ㄱ다") // true
 * endsWith("늙다", "ㄱ다", { decouple: false }) // false
 *
 * @param {string} str The string to operate on
 * @param {string} searchStr The string to be searched for in the end of the operation string
 * @param {object} [options]
 * @param {boolean} [options.decouple] Decouples the composite letters before performing the search (default: `true`)
 * @returns {boolean}
 */
export default function endsWith(str, searchStr, options = {}) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")
	if (typeof searchStr !== "string") throw new TypeError("Expected searchStr to be a string")

	if (!str.length || !searchStr.length) return false

	if (!options || options.constructor !== Object) options = {}
	if (typeof options.decouple !== "boolean") options.decouple = true

	const splitStr = split(str, { decouple: options.decouple }).join("")
	const splitSearchStr = split(searchStr, { decouple: options.decouple }).join("")

	return splitStr.endsWith(splitSearchStr)
}
