import test from "node:test"
import assert from "node:assert"
import getMedial from "../lib/getMedial.js"

test(`getMedial(123) | input string is not a string`, () => {
	assert.throws(() => getMedial(123), TypeError)
})

test(`getMedial("") | empty string`, () => {
	assert.deepStrictEqual(getMedial(""), "")
})

test(`getMedial("ㄴ") | loose letter`, () => {
	assert.deepStrictEqual(getMedial("ㄴ"), "")
})

test(`getMedial("a") | non-hangul`, () => {
	assert.deepStrictEqual(getMedial("a"), "")
})

test(`getMedial("하") | without batchim`, () => {
	assert.deepStrictEqual(getMedial("하"), "ㅏ")
})

test(`getMedial("한") | with batchim`, () => {
	assert.deepStrictEqual(getMedial("한"), "ㅏ")
})

test(`getMedial("한글") | non-syllable`, () => {
	assert.deepStrictEqual(getMedial("한글"), "")
})

test(`getMedial("한", { compatibility: false }) | with batchim and not converting to compatibility letters`, () => {
	assert.deepStrictEqual(getMedial("한", { compatibility: false }), "ᅡ")
})
