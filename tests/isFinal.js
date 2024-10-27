import test from "node:test"
import assert from "node:assert"
import isFinal from "../lib/isFinal.js"

test(`isFinal() | undefined input string`, () => {
	assert.deepStrictEqual(isFinal(), false)
})

test(`isFinal("") | empty input string`, () => {
	assert.deepStrictEqual(isFinal(""), false)
})

test(`isFinal("ᆨ") | final letter`, () => {
	assert.deepStrictEqual(isFinal("ᆨ"), true)
})

test(`isFinal("ㄱ") | compat letter`, () => {
	assert.deepStrictEqual(isFinal("ㄱ"), false)
})

test(`isFinal("ㅏ") | non-final letter`, () => {
	assert.deepStrictEqual(isFinal("ㅏ"), false)
})

test(`isFinal("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isFinal("a"), false)
})
