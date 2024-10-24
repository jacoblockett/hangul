import test from "node:test"
import assert from "node:assert"
import isCompatibility from "../lib/isCompatibility.js"

test(`isCompatibility() | expects: false | undefined input string`, () => {
	assert.deepStrictEqual(isCompatibility(), false)
})

test(`isCompatibility("") | expects: false | empty input string`, () => {
	assert.deepStrictEqual(isCompatibility(""), false)
})

test(`isCompatibility("ㅋ") | expects: true | compatibility letter`, () => {
	assert.deepStrictEqual(isCompatibility("ㅋ"), true)
})

test(`isCompatibility("ᄏ") | expects: false | non-compatibility letter`, () => {
	assert.deepStrictEqual(isCompatibility("ᄏ"), false)
})

test(`isCompatibility("a") | expects: false | non-hangul letter`, () => {
	assert.deepStrictEqual(isCompatibility("a"), false)
})
