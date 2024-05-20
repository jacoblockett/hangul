import initialLetters from "../char_maps/initialLetters.js"
import initialBlockCodes from "../char_maps/initialBlockCodes.js"
import medialLetters from "../char_maps/medialLetters.js"
import medialBlockCodes from "../char_maps/medialBlockCodes.js"
import finalLetters from "../char_maps/finalLetters.js"
import finalBlockCodes from "../char_maps/finalBlockCodes.js"
import toCompatibilityLetter from "../char_maps/toCompatibilityLetter.js"
import toInitialLetter from "../char_maps/toInitialLetter.js"
import toMedialLetter from "../char_maps/toMedialLetter.js"
import toFinalLetter from "../char_maps/toFinalLetter.js"

export default function constructBlock(...characters) {
	if (characters.some(char => typeof char !== "string"))
		throw new TypeError(`Expected all characters to be strings`)
	if (characters.length < 2)
		throw new Error(`Too few arguments - constructBlock expects at least 2 characters`)
	if (characters.length > 3)
		throw new Error(`Too many arguments - constructBlock can take a maximum of 3 characters`)

	if (characters.length === 0) return ""
	if (characters.length === 1) return characters[0]

	let [initial, medial, final] = characters

	const initialBlockCode = initialBlockCodes[toInitialLetter[initial] || initial]
	const medialBlockCode = medialBlockCodes[toMedialLetter[medial] || medial]
	const finalBlockCode = final ? finalBlockCodes[toFinalLetter[final] || final] : 0

	if (typeof initialBlockCode !== "number")
		throw new Error(`'${initial}' is not a valid initial character`)
	if (typeof medialBlockCode !== "number")
		throw new Error(`'${medial}' is not a valid medial character`)
	if (typeof finalBlockCode !== "number")
		throw new Error(`'${final}' is not a valid final character`)

	return String.fromCodePoint(
		initialBlockCode * 588 + medialBlockCode * 28 + finalBlockCode + 44032,
	)
}
