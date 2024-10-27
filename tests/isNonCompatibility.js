import test from "node:test"
import assert from "node:assert"
import isNonCompatibility from "../lib/isNonCompatibility.js"

test(`isNonCompatibility() | undefined input string`, () => {
	assert.deepStrictEqual(isNonCompatibility(), false)
})

test(`isNonCompatibility("") | empty input string`, () => {
	assert.deepStrictEqual(isNonCompatibility(""), false)
})

test(`isNonCompatibility("ᄏ") | non-compatibility letter`, () => {
	assert.deepStrictEqual(isNonCompatibility("ᄏ"), true)
})

test(`isNonCompatibility("ㅋ") | compatibility letter`, () => {
	assert.deepStrictEqual(isNonCompatibility("ㅋ"), false)
})

test(`isNonCompatibility("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isNonCompatibility("a"), false)
})
