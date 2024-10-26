import test from "node:test"
import assert from "node:assert"
import isDiphthong from "../lib/isDiphthong.js"

test(`isDiphthong() | undefined input string`, () => {
	assert.deepStrictEqual(isDiphthong(), false)
})

test(`isDiphthong("") | empty input string`, () => {
	assert.deepStrictEqual(isDiphthong(""), false)
})

test(`isDiphthong("ㅘ") | diphthong letter`, () => {
	assert.deepStrictEqual(isDiphthong("ㅘ"), true)
})

test(`isDiphthong("ㅏ") | non-diphthong letter`, () => {
	assert.deepStrictEqual(isDiphthong("ㅏ"), false)
})

test(`isDiphthong("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isDiphthong("a"), false)
})
