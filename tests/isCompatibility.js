import test from "node:test"
import assert from "node:assert"
import isCompatibility from "../lib/isCompatibility.js"

test(`isCompatibility() | undefined input string`, () => {
	assert.deepStrictEqual(isCompatibility(), false)
})

test(`isCompatibility("") | empty input string`, () => {
	assert.deepStrictEqual(isCompatibility(""), false)
})

test(`isCompatibility("ㅋ") | compatibility letter`, () => {
	assert.deepStrictEqual(isCompatibility("ㅋ"), true)
})

test(`isCompatibility("ᄏ") | non-compatibility letter`, () => {
	assert.deepStrictEqual(isCompatibility("ᄏ"), false)
})

test(`isCompatibility("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isCompatibility("a"), false)
})
