import test from "node:test"
import assert from "node:assert"
import getInitial from "../lib/getInitial.js"

test(`getInitial(123) | expects: TypeError | input string is not a string`, () => {
	assert.throws(() => getInitial(123), TypeError)
})

test(`getInitial("") | expects: "" | empty string`, () => {
	assert.deepStrictEqual(getInitial(""), "")
})

test(`getInitial("ㄴ") | expects: "" | loose letter`, () => {
	assert.deepStrictEqual(getInitial("ㄴ"), "")
})

test(`getInitial("a") | expects: "" | non-hangul`, () => {
	assert.deepStrictEqual(getInitial("a"), "")
})

test(`getInitial("하") | expects: "ㅎ" | without batchim`, () => {
	assert.deepStrictEqual(getInitial("하"), "ㅎ")
})

test(`getInitial("한") | expects: "ㅎ" | with batchim`, () => {
	assert.deepStrictEqual(getInitial("한"), "ㅎ")
})

test(`getInitial("한글") | expects: "" | non-syllable`, () => {
	assert.deepStrictEqual(getInitial("한글"), "")
})

test(`getInitial("한", { compatibility: false }) | expects: "ᄒ" | with batchim and not converting to compatibility letters`, () => {
	assert.deepStrictEqual(getInitial("한", { compatibility: false }), "ᄒ")
})
