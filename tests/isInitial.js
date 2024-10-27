import test from "node:test"
import assert from "node:assert"
import isInitial from "../lib/isInitial.js"

test(`isInitial() | undefined input string`, () => {
	assert.deepStrictEqual(isInitial(), false)
})

test(`isInitial("") | empty input string`, () => {
	assert.deepStrictEqual(isInitial(""), false)
})

test(`isInitial("ᄀ") | initial letter`, () => {
	assert.deepStrictEqual(isInitial("ᄀ"), true)
})

test(`isInitial("ㄱ") | compat letter`, () => {
	assert.deepStrictEqual(isInitial("ㄱ"), false)
})

test(`isInitial("ㅏ") | non-initial letter`, () => {
	assert.deepStrictEqual(isInitial("ㅏ"), false)
})

test(`isInitial("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isInitial("a"), false)
})
