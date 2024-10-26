import test from "node:test"
import assert from "node:assert"
import startsWith from "../lib/startsWith.js"

test(`startsWith(123, "test") | input string is not a string`, () => {
	assert.throws(() => startsWith(123, "test"), TypeError)
})

test(`startsWith("test", 123) | search string is not a string`, () => {
	assert.throws(() => startsWith("test", 123), TypeError)
})

test(`startsWith("", "글") | empty input string`, () => {
	assert.deepStrictEqual(startsWith("", "글"), false)
})

test(`startsWith("한글", "") | empty search string`, () => {
	assert.deepStrictEqual(startsWith("한글", ""), false)
})

test(`startsWith("한글", "한") | formed block`, () => {
	assert.deepStrictEqual(startsWith("한글", "한"), true)
})

test(`startsWith("한글", "글") | formed block`, () => {
	assert.deepStrictEqual(startsWith("한글", "글"), false)
})

test(`startsWith("한글", "ㅎㅏㄴ") | unformed block`, () => {
	assert.deepStrictEqual(startsWith("한글", "ㅎㅏㄴ"), true)
})

test(`startsWith("한글", "ㅎㅏㄴㄱ") | syllable-agnostic`, () => {
	assert.deepStrictEqual(startsWith("한글", "ㅎㅏㄴㄱ"), true)
})

test(`startsWith("늙다", "ㄱ다") | decoupling is on`, () => {
	assert.deepStrictEqual(startsWith("늙다", "늘"), true)
})

test(`startsWith("늙다", "늘", { decouple: false }) | decoupling is off`, () => {
	assert.deepStrictEqual(startsWith("늙다", "늘", { decouple: false }), false)
})

test(`startsWith("Korean 한글", "Korean 한") | non-hangul mixed with hangul`, () => {
	assert.deepStrictEqual(startsWith("Korean 한글", "Korean 한"), true)
})
