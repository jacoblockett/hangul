export default function hash(array, options = {}) {
	if (!Array.isArray(array)) throw new TypeError("Expected array to be an array")
	if (!options || options.constructor !== Object)
		throw new TypeError("Expected options to be an object")

	options.conversionMap = typeof options.conversionMap === "boolean" ? options.conversionMap : false

	const map = {}

	if (options.conversionMap) {
		for (let i = 0; i < array.length; i++) {
			map[array[i][0]] = array[i][1]
		}
	} else {
		for (let i = 0; i < array.length; i++) {
			map[array[i]] = i
		}
	}

	return map
}
