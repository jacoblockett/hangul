import test from "node:test"
import assert from "node:assert"
import endsWith from "../lib/endsWith.js"

test(`endsWith(123, "test") | expects: TypeError | input string is not a string`, () => {
	assert.throws(() => endsWith(123, "test"), TypeError)
})

test(`endsWith("test", 123) | expects: TypeError | search string is not a string`, () => {
	assert.throws(() => endsWith("test", 123), TypeError)
})

test(`endsWith("", "글") | expects: false | empty input string`, () => {
	assert.deepStrictEqual(endsWith("", "글"), false)
})

test(`endsWith("한글", "") | expects: false | empty search string`, () => {
	assert.deepStrictEqual(endsWith("한글", ""), false)
})

test(`endsWith("한글", "글") | expects: true | formed block`, () => {
	assert.deepStrictEqual(endsWith("한글", "글"), true)
})

test(`endsWith("한글", "한") | expects: false | formed block`, () => {
	assert.deepStrictEqual(endsWith("한글", "한"), false)
})

test(`endsWith("한글", "ㄱㅡㄹ") | expects: true | unformed block`, () => {
	assert.deepStrictEqual(endsWith("한글", "ㄱㅡㄹ"), true)
})

test(`endsWith("한글", "ㄴㄱㅡㄹ") | expects: true | syllable-agnostic`, () => {
	assert.deepStrictEqual(endsWith("한글", "ㄴㄱㅡㄹ"), true)
})

test(`endsWith("늙다", "ㄱ다") | expects: true | decoupling is on`, () => {
	assert.deepStrictEqual(endsWith("늙다", "ㄱ다"), true)
})

test(`endsWith("늙다", "ㄱ다", { decouple: false }) | expects: false | decoupling is off`, () => {
	assert.deepStrictEqual(endsWith("늙다", "ㄱ다", { decouple: false }), false)
})

test(`endsWith("한글 Korean", "글 Korean") | expects: true | non-hangul mixed with hangul`, () => {
	assert.deepStrictEqual(endsWith("한글 Korean", "글 Korean"), true)
})
