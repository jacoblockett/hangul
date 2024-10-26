import test from "node:test"
import assert from "node:assert"
import toIotized from "../lib/toIotized.js"

test(`toIotized(123) | input string is not a string`, () => {
	assert.throws(() => toIotized(123), TypeError)
})

test(`toIotized("") | empty string`, () => {
	assert.deepStrictEqual(toIotized(""), "")
})

test(`toIotized("ㅏ") | single letter`, () => {
	assert.deepStrictEqual(toIotized("ㅏ"), "ㅑ")
})

test(`toIotized("한국") | block`, () => {
	assert.deepStrictEqual(toIotized("한국"), "햔귝")
})

test(`toIotized("ㄱ") | redundant single letter`, () => {
	assert.deepStrictEqual(toIotized("ㄱ"), "ㄱ")
})

test(`toIotized("ㅏㄱㅑ") | loose letters`, () => {
	assert.deepStrictEqual(toIotized("ㅏㄱㅑ"), "ㅑㄱㅑ")
})

test(`toIotized("a") | non-hangul`, () => {
	assert.deepStrictEqual(toIotized("a"), "a")
})
