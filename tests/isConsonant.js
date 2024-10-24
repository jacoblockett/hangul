import test from "node:test"
import assert from "node:assert"
import isConsonant from "../lib/isConsonant.js"

test(`isConsonant() | expects: false | undefined input string`, () => {
	assert.deepStrictEqual(isConsonant(), false)
})

test(`isConsonant("") | expects: false | empty input string`, () => {
	assert.deepStrictEqual(isConsonant(""), false)
})

test(`isConsonant("ㄱ") | expects: true | consonant letter`, () => {
	assert.deepStrictEqual(isConsonant("ㄱ"), true)
})

test(`isConsonant("ㅏ") | expects: false | non-consonant letter`, () => {
	assert.deepStrictEqual(isConsonant("ㅏ"), false)
})

test(`isConsonant("a") | expects: false | non-hangul letter`, () => {
	assert.deepStrictEqual(isConsonant("a"), false)
})
