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

export default {
	isCompatibilityLetter,
	isCompositeConsonant: isConsonantCluster,
	isCompositeVowel: isDiphthong,
	isConsonant,
	isConsonantCluster,
	isDiphthong,
	isDoubleConsonant,
	isFinal,
	isHangul,
	isInitial,
	isIotizedVowel,
	isMedial,
	isNonCompatibilityLetter,
	isSyllable,
	isVowel,
	join,
	split,
}
