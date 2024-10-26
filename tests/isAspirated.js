import test from "node:test"
import assert from "node:assert"
import isAspirated from "../lib/isAspirated.js"

test(`isAspirated() | undefined input string`, () => {
	assert.deepStrictEqual(isAspirated(), false)
})

test(`isAspirated("") | empty input string`, () => {
	assert.deepStrictEqual(isAspirated(""), false)
})

test(`isAspirated("ㅋ") | aspirated letter`, () => {
	assert.deepStrictEqual(isAspirated("ㅋ"), true)
})

test(`isAspirated("ᄏ") | non-compatibility aspirated letter`, () => {
	assert.deepStrictEqual(isAspirated("ᄏ"), true)
})

test(`isAspirated("ㄲ") | non-aspirated letter`, () => {
	assert.deepStrictEqual(isAspirated("ㄲ"), false)
})

test(`isAspirated("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isAspirated("a"), false)
})
