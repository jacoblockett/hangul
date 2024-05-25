export default function hash(array) {
	if (!Array.isArray(array)) throw new TypeError("Expected array to be an array")

	const map = {}

	for (let i = 0; i < array.length; i++) {
		map[array[i]] = i
	}

	return map
}
