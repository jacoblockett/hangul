import test from "node:test"
import assert from "node:assert"
import getMedial from "../lib/getMedial.js"

test(`getMedial(123) | expects: TypeError | input string is not a string`, () => {
	assert.throws(() => getMedial(123), TypeError)
})

test(`getMedial("") | expects: "" | empty string`, () => {
	assert.deepStrictEqual(getMedial(""), "")
})

test(`getMedial("ㄴ") | expects: "" | loose letter`, () => {
	assert.deepStrictEqual(getMedial("ㄴ"), "")
})

test(`getMedial("a") | expects: "" | non-hangul`, () => {
	assert.deepStrictEqual(getMedial("a"), "")
})

test(`getMedial("하") | expects: "ㅏ" | without batchim`, () => {
	assert.deepStrictEqual(getMedial("하"), "ㅏ")
})

test(`getMedial("한") | expects: "ㅏ" | with batchim`, () => {
	assert.deepStrictEqual(getMedial("한"), "ㅏ")
})

test(`getMedial("한글") | expects: "" | non-syllable`, () => {
	assert.deepStrictEqual(getMedial("한글"), "")
})

test(`getMedial("한", { compatibility: false }) | expects: "ᅡ" | with batchim and not converting to compatibility letters`, () => {
	assert.deepStrictEqual(getMedial("한", { compatibility: false }), "ᅡ")
})
