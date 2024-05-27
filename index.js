import endsWith from "./lib/endsWith.js"
import getFinal from "./lib/getFinal.js"
import getInitial from "./lib/getInitial.js"
import getMedial from "./lib/getMedial.js"
import isCompatibilityLetter from "./lib/isCompatibilityLetter.js"
import isConsonant from "./lib/isConsonant.js"
import isConsonantCluster from "./lib/isConsonantCluster.js"
import isDiphthong from "./lib/isDiphthong.js"
import isDoubleConsonant from "./lib/isDoubleConsonant.js"
import isFinal from "./lib/isFinal.js"
import isHangul from "./lib/isHangul.js"
import isInitial from "./lib/isInitial.js"
import isIotizedVowel from "./lib/isIotizedVowel.js"
import isMedial from "./lib/isMedial.js"
import isNonCompatibilityLetter from "./lib/isNonCompatibilityLetter.js"
import isSyllable from "./lib/isSyllable.js"
import isVowel from "./lib/isVowel.js"
import join from "./lib/join.js"
import split from "./lib/split.js"
import startsWith from "./lib/startsWith.js"

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
	 * Checks if the given value is a compatibility letter.
	 */
	isCompatibilityLetter,
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
	 * Checks if the given value is a non-compatibility, medial vowel.
	 */
	isMedial,
	/**
	 * Checks if the given value is a non-compatibility letter.
	 */
	isNonCompatibilityLetter,
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
}
