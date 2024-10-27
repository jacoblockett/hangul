import test from "node:test"
import assert from "node:assert"
import isLenis from "../lib/isLenis.js"

test(`isLenis() | undefined input string`, () => {
	assert.deepStrictEqual(isLenis(), false)
})

test(`isLenis("") | empty input string`, () => {
	assert.deepStrictEqual(isLenis(""), false)
})

test(`isLenis("ㄱ") | non-tensed letter`, () => {
	assert.deepStrictEqual(isLenis("ㄱ"), true)
})

test(`isLenis("ㄲ") | tensed letter`, () => {
	assert.deepStrictEqual(isLenis("ㄲ"), false)
})

test(`isLenis("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isLenis("a"), false)
})
