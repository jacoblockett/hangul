import endsWith from "./lib/endsWith.js"
import getFinal from "./lib/getFinal.js"
import getInitial from "./lib/getInitial.js"
import getMedial from "./lib/getMedial.js"
import isAspirated from "./lib/isAspirated.js"
import isCompatibility from "./lib/isCompatibility.js"
import isConsonant from "./lib/isConsonant.js"
import isConsonantCluster from "./lib/isConsonantCluster.js"
import isDiphthong from "./lib/isDiphthong.js"
import isDoubleConsonant from "./lib/isDoubleConsonant.js"
import isFinal from "./lib/isFinal.js"
import isFortis from "./lib/isFortis.js"
import isHangul from "./lib/isHangul.js"
import isInitial from "./lib/isInitial.js"
import isIotizedVowel from "./lib/isIotizedVowel.js"
import isLenis from "./lib/isLenis.js"
import isMedial from "./lib/isMedial.js"
import isNonCompatibility from "./lib/isNonCompatibility.js"
import isSyllable from "./lib/isSyllable.js"
import isVowel from "./lib/isVowel.js"
import join from "./lib/join.js"
import split from "./lib/split.js"
import startsWith from "./lib/startsWith.js"
import toAspirated from "./lib/toAspirated.js"
import toCompatibility from "./lib/toCompatibility.js"
import toDoubleConsonant from "./lib/toDoubleConsonant.js"
import toFinal from "./lib/toFinal.js"
import toFortis from "./lib/toFortis.js"
import toInitial from "./lib/toInitial.js"
import toIotized from "./lib/toIotized.js"
import toLenis from "./lib/toLenis.js"
import toMedial from "./lib/toMedial.js"
import toSingleConsonant from "./lib/toSingleConsonant.js"

export default {
	/**
	 * Checks if the given search string exists at the end of the given operation string.
	 */
	endsWith,
	/**
	 * Extracts the final letter from the given Hangul syllable block.
	 */
	getFinal,
	/**
	 * Extracts the initial letter from the given Hangul syllable block.
	 */
	getInitial,
	/**
	 * Extracts the medial letter from the given Hangul syllable block.
	 */
	getMedial,
	/**
	 * Checks if the given value is an aspirated consonant.
	 */
	isAspirated,
	/**
	 * Checks if the given value is a compatibility letter.
	 */
	isCompatibility,
	/**
	 * Checks if the given value is a consonant cluster, a cluster of two consonants as one letter.
	 *
	 * @alias isConsonantCluster
	 */
	isCompositeConsonant: isConsonantCluster,
	/**
	 * Checks if the given value is a diphthong, a cluster of two vowels as one letter.
	 *
	 * @alias isDiphthong
	 */
	isCompositeVowel: isDiphthong,
	/**
	 * Checks if the given value is a consonant.
	 */
	isConsonant,
	/**
	 * Checks if the given value is a consonant cluster, a cluster of two consonants as one letter.
	 *
	 * @alias isCompositeConsonant
	 */
	isConsonantCluster,
	/**
	 * Checks if the given value is a diphthong, a cluster of two vowels as one letter.
	 *
	 * @alias isCompositeVowel
	 */
	isDiphthong,
	/**
	 * Checks if the given value is a double consonant, a cluster of two identical consonants as one letter.
	 */
	isDoubleConsonant,
	/**
	 * Checks if the given value is a non-compatibility, final consonant.
	 */
	isFinal,
	/**
	 * Checks if the given value is a fortis (tensed) consonant.
	 */
	isFortis,
	/**
	 * Checks if the given value is some sort of Hangul characters, either a loose
	 * letter or a syllable block. By default, symbols and numbers are allowed to pass.
	 * Use the `options.strict` boolean to disallow this behavior.
	 */
	isHangul,
	/**
	 * Checks if the given value is a non-compatibility, initial consonant.
	 */
	isInitial,
	/**
	 * Checks if the given value is an iotized vowel, one that begins with the /j/ phoneme.
	 */
	isIotizedVowel,
	/**
	 * Checks if the given value is a lenis (soft) consonant.
	 */
	isLenis,
	/**
	 * Checks if the given value is a non-compatibility, medial vowel.
	 */
	isMedial,
	/**
	 * Checks if the given value is a non-compatibility letter.
	 */
	isNonCompatibility,
	/**
	 * Checks if the given value is a Hangul syllable block.
	 */
	isSyllable,
	/**
	 * Checks if the given value is a vowel.
	 */
	isVowel,
	/**
	 * Joins the given string in a way that would resemble dubeolsik (두벌식) typing. Converts all
	 * non-compatibility letters to compatibility letters during this process.
	 */
	join,
	/**
	 * Splits the given string, deconstructing all of the hangul syllables into their constituent letters.
	 */
	split,
	/**
	 * Checks if the given search string exists at the beginning of the given operation string.
	 */
	startsWith,
	/**
	 * Converts all consonants into their aspirated form.
	 */
	toAspirated,
	/**
	 * Converts all letters into their compatibility form.
	 */
	toCompatibility,
	/**
	 * Converts all consonants into their double consonant form.
	 */
	toDoubleConsonant,
	/**
	 * Converts all consonants into their final form.
	 */
	toFinal,
	/**
	 * Converts all consonants into their fortis (tensed) form.
	 */
	toFortis,
	/**
	 * Converts all consonants into their initial form.
	 */
	toInitial,
	/**
	 * Converts all vowels that can be iotized within the given string.
	 */
	toIotized,
	/**
	 * Converts all consonants into their lenis (soft) form.
	 */
	toLenis,
	/**
	 * Converts all vowels into their medial form.
	 */
	toMedial,
	/**
	 * Converts all consonants into their single consonant form.
	 */
	toSingleConsonant,
}
