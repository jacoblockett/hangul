import test from "node:test"
import assert from "node:assert"
import isDoubleConsonant from "../lib/isDoubleConsonant.js"

test(`isDoubleConsonant() | undefined input string`, () => {
	assert.deepStrictEqual(isDoubleConsonant(), false)
})

test(`isDoubleConsonant("") | empty input string`, () => {
	assert.deepStrictEqual(isDoubleConsonant(""), false)
})

test(`isDoubleConsonant("ㄲ") | consonant double letter`, () => {
	assert.deepStrictEqual(isDoubleConsonant("ㄲ"), true)
})

test(`isDoubleConsonant("ㄳ") | consonant cluster non-double letter`, () => {
	assert.deepStrictEqual(isDoubleConsonant("ㄳ"), false)
})

test(`isDoubleConsonant("ㄱ") | non-consonant double letter`, () => {
	assert.deepStrictEqual(isDoubleConsonant("ㄱ"), false)
})

test(`isDoubleConsonant("ㅏ") | vowel letter`, () => {
	assert.deepStrictEqual(isDoubleConsonant("ㅏ"), false)
})

test(`isDoubleConsonant("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isDoubleConsonant("a"), false)
})
