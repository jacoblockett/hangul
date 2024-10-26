import test from "node:test"
import assert from "node:assert"
import getInitial from "../lib/getInitial.js"

test(`getInitial(123) | input string is not a string`, () => {
	assert.throws(() => getInitial(123), TypeError)
})

test(`getInitial("") | empty string`, () => {
	assert.deepStrictEqual(getInitial(""), "")
})

test(`getInitial("ㄴ") | loose letter`, () => {
	assert.deepStrictEqual(getInitial("ㄴ"), "")
})

test(`getInitial("a") | non-hangul`, () => {
	assert.deepStrictEqual(getInitial("a"), "")
})

test(`getInitial("하") | without batchim`, () => {
	assert.deepStrictEqual(getInitial("하"), "ㅎ")
})

test(`getInitial("한") | with batchim`, () => {
	assert.deepStrictEqual(getInitial("한"), "ㅎ")
})

test(`getInitial("한글") | non-syllable`, () => {
	assert.deepStrictEqual(getInitial("한글"), "")
})

test(`getInitial("한", { compatibility: false }) | with batchim and not converting to compatibility letters`, () => {
	assert.deepStrictEqual(getInitial("한", { compatibility: false }), "ᄒ")
})
