import split from "./split.js"

/**
 * Checks if the given search string exists at the beginning of the given operation string.
 *
 * @example
 * startsWith("한글", "한") // true
 * startsWith("한글", "ㅎㅏ") // true
 * startsWith("한글", "글") // false
 * startsWith("늙다", "늘") // true
 * startsWith("늙다", "늘", { decouple: false }) // false
 *
 * @param {string} str The string to operate on
 * @param {string} searchStr The string to be searched for in the beginning of the operation string
 * @param {object} [options]
 * @param {boolean} [options.decouple] Decouples the composite letters before performing the search (default: `true`)
 * @returns {boolean}
 */
export default function startsWith(str, searchStr, options = {}) {
	if (typeof str !== "string") throw new TypeError("Expected str to be a string")
	if (typeof searchStr !== "string") throw new TypeError("Expected searchStr to be a string")

	if (!str.length || !searchStr.length) return false

	if (!options || options.constructor !== Object) options = {}
	if (typeof options.decouple !== "boolean") options.decouple = true

	const splitStr = split(str, { decouple: options.decouple }).join("")
	const splitSearchStr = split(searchStr, { decouple: options.decouple }).join("")

	return splitStr.startsWith(splitSearchStr)
}
