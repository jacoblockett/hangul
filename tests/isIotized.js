import test from "node:test"
import assert from "node:assert"
import isIotized from "../lib/isIotized.js"

test(`isIotized() | undefined input string`, () => {
	assert.deepStrictEqual(isIotized(), false)
})

test(`isIotized("") | empty input string`, () => {
	assert.deepStrictEqual(isIotized(""), false)
})

test(`isIotized("ㅑ") | iotized letter`, () => {
	assert.deepStrictEqual(isIotized("ㅑ"), true)
})

test(`isIotized("ㅏ") | non-iotized letter`, () => {
	assert.deepStrictEqual(isIotized("ㅏ"), false)
})

test(`isIotized("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isIotized("a"), false)
})
