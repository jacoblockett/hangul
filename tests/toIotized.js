import test from "node:test"
import assert from "node:assert"
import toIotized from "../lib/toIotized.js"

test(`toIotized(123) | expects: TypeError | input string is not a string`, () => {
	assert.throws(() => toIotized(123), TypeError)
})

test(`toIotized("") | expects: "" | empty string`, () => {
	assert.deepStrictEqual(toIotized(""), "")
})

test(`toIotized("ㅏ") | expects: "ㅑ" | single letter`, () => {
	assert.deepStrictEqual(toIotized("ㅏ"), "ㅑ")
})

test(`toIotized("한국") | expects: "햔귝" | block`, () => {
	assert.deepStrictEqual(toIotized("한국"), "햔귝")
})

test(`toIotized("ㄱ") | expects: "ㄱ" | redundant single letter`, () => {
	assert.deepStrictEqual(toIotized("ㄱ"), "ㄱ")
})

test(`toIotized("ㅏㄱㅑ") | expects: "ㅑㄱㅑ" | loose letters`, () => {
	assert.deepStrictEqual(toIotized("ㅏㄱㅑ"), "ㅑㄱㅑ")
})

test(`toIotized("a") | expects: "a" | non-hangul`, () => {
	assert.deepStrictEqual(toIotized("a"), "a")
})
