import test from "node:test"
import assert from "node:assert"
import isConsonant from "../lib/isConsonant.js"

test(`isConsonant() | expects: false | undefined input string`, () => {
	assert.deepStrictEqual(isConsonant(), false)
})

test(`isConsonant("") | expects: false | empty input string`, () => {
	assert.deepStrictEqual(isConsonant(""), false)
})

test(`isConsonant("ㄲ") | expects: true | consonant cluster double letter`, () => {
	assert.deepStrictEqual(isConsonant("ㄱ"), true)
})

test(`isConsonant("ㄳ") | expects: true | consonant cluster letter`, () => {
	assert.deepStrictEqual(isConsonant("ㄱ"), true)
})

test(`isConsonant("ㄱ") | expects: false | non-consonant cluster letter`, () => {
	assert.deepStrictEqual(isConsonant("ㅏ"), false)
})

test(`isConsonant("ㅏ") | expects: false | vowel letter`, () => {
	assert.deepStrictEqual(isConsonant("ㅏ"), false)
})

test(`isConsonant("a") | expects: false | non-hangul letter`, () => {
	assert.deepStrictEqual(isConsonant("a"), false)
})
