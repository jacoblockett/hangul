import test from "node:test"
import assert from "node:assert"
import isMedial from "../lib/isMedial.js"

test(`isMedial() | undefined input string`, () => {
	assert.deepStrictEqual(isMedial(), false)
})

test(`isMedial("") | empty input string`, () => {
	assert.deepStrictEqual(isMedial(""), false)
})

test(`isMedial("ᅡ") | medial letter`, () => {
	assert.deepStrictEqual(isMedial("ᅡ"), true)
})

test(`isMedial("ㅏ") | non-medial letter`, () => {
	assert.deepStrictEqual(isMedial("ㅏ"), false)
})

test(`isMedial("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isMedial("a"), false)
})
