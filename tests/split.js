import test from "node:test"
import assert from "node:assert"
import split from "../lib/split.js"

test(`split(123) | expects: TypeError | input string is not a string`, () => {
	assert.throws(() => split(123), TypeError)
})

test(`split("") | expects: [] | empty string`, () => {
	assert.deepStrictEqual(split(""), [])
})

test(`split("하다") | expects: ["ㅎ", "ㅏ", "ㄷ", "ㅏ"] | splits simple hangul blocks`, () => {
	assert.deepStrictEqual(split("하다"), ["ㅎ", "ㅏ", "ㄷ", "ㅏ"])
})

test(`split("했다") | expects: ["ㅎ", "ㅐ", "ㅆ", "ㄷ", "ㅏ"] | splits hangul blocks with batchim`, () => {
	assert.deepStrictEqual(split("했다"), ["ㅎ", "ㅐ", "ㅆ", "ㄷ", "ㅏ"])
})

test(`split("a하b다c") | expects: ["a", "ㅎ", "ㅏ", "b", "ㄷ", "ㅏ", "c"] | splits hangul blocks mixed with non-hangul`, () => {
	assert.deepStrictEqual(split("a하b다c"), ["a", "ㅎ", "ㅏ", "b", "ㄷ", "ㅏ", "c"])
})

test(`split("했다", { decouple: true }) | expects: ["ㅎ", "ㅐ", "ㅅ", "ㅅ", "ㄷ", "ㅏ"] | splits hangul blocks with batchim, decoupling composite letters`, () => {
	assert.deepStrictEqual(split("했다", { decouple: true }), ["ㅎ", "ㅐ", "ㅅ", "ㅅ", "ㄷ", "ㅏ"])
})

test(`split("했다", { compatibility: false }) | expects: ["ᄒ", "ᅢ", "ᆻ", "ᄃ", "ᅡ"] | splits hangul blocks with batchim, not converting to compatibility letters`, () => {
	assert.deepStrictEqual(split("했다", { compatibility: false }), ["ᄒ", "ᅢ", "ᆻ", "ᄃ", "ᅡ"])
})

test(`split("했다", { decouple: true, compatibility: false }) | expects: ["ᄒ", "ᅢ", "ᆺ", "ᆺ", "ᄃ", "ᅡ"] | splits hangul blocks with batchim, decoupling composite letters and not converting to compatibility letters`, () => {
	assert.deepStrictEqual(split("했다", { decouple: true, compatibility: false }), [
		"ᄒ",
		"ᅢ",
		"ᆺ",
		"ᆺ",
		"ᄃ",
		"ᅡ",
	])
})

test(`split("하다", { group: true }) | expects: [["ㅎ", "ㅏ"], ["ㄷ", "ㅏ"]] | splits simple hangul blocks into their own grouped array`, () => {
	assert.deepStrictEqual(split("하다", { group: true }), [
		["ㅎ", "ㅏ"],
		["ㄷ", "ㅏ"],
	])
})