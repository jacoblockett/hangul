import test from "node:test"
import assert from "node:assert"
import isHangul from "../lib/isHangul.js"

test(`isHangul() | undefined input string`, () => {
	assert.deepStrictEqual(isHangul(), false)
})

test(`isHangul("") | empty input string`, () => {
	assert.deepStrictEqual(isHangul(""), false)
})

test(`isHangul("ㄱ") | single letter`, () => {
	assert.deepStrictEqual(isHangul("ㄱ"), true)
})

test(`isHangul("한") | syllable block`, () => {
	assert.deepStrictEqual(isHangul("한"), true)
})

test(`isHangul("한글") | multiple syllable blocks`, () => {
	assert.deepStrictEqual(isHangul("한글"), true)
})

test(`isHangul("1 한글!") | multiple syllable blocks with symbols/numbers`, () => {
	assert.deepStrictEqual(isHangul("1 한글!"), true)
})

test(`isHangul("1 한글!", { strict: true }) | multiple syllable blocks with symbols/numbers, strict mode on`, () => {
	assert.deepStrictEqual(isHangul("1 한글!", { strict: true }), false)
})
