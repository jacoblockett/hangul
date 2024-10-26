import test from "node:test"
import assert from "node:assert"
import getFinal from "../lib/getFinal.js"

test(`getFinal(123) | input string is not a string`, () => {
	assert.throws(() => getFinal(123), TypeError)
})

test(`getFinal("") | empty string`, () => {
	assert.deepStrictEqual(getFinal(""), "")
})

test(`getFinal("ㄴ") | loose letter`, () => {
	assert.deepStrictEqual(getFinal("ㄴ"), "")
})

test(`getFinal("a") | non-hangul`, () => {
	assert.deepStrictEqual(getFinal("a"), "")
})

test(`getFinal("하") | without batchim`, () => {
	assert.deepStrictEqual(getFinal("하"), "")
})

test(`getFinal("한") | with batchim`, () => {
	assert.deepStrictEqual(getFinal("한"), "ㄴ")
})

test(`getFinal("한글") | non-syllable`, () => {
	assert.deepStrictEqual(getFinal("한글"), "")
})

test(`getFinal("한", { compatibility: false }) | with batchim and not converting to compatibility letters`, () => {
	assert.deepStrictEqual(getFinal("한", { compatibility: false }), "ᆫ")
})
