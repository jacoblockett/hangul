import test from "node:test"
import assert from "node:assert"
import isConsonant from "../lib/isConsonant.js"

test(`isConsonant() | undefined input string`, () => {
	assert.deepStrictEqual(isConsonant(), false)
})

test(`isConsonant("") | empty input string`, () => {
	assert.deepStrictEqual(isConsonant(""), false)
})

test(`isConsonant("ㄱ") | consonant letter`, () => {
	assert.deepStrictEqual(isConsonant("ㄱ"), true)
})

test(`isConsonant("ㅏ") | non-consonant letter`, () => {
	assert.deepStrictEqual(isConsonant("ㅏ"), false)
})

test(`isConsonant("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isConsonant("a"), false)
})
