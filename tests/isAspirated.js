import test from "node:test"
import assert from "node:assert"
import isAspirated from "../lib/isAspirated.js"

test(`isAspirated() | expects: false | undefined input string`, () => {
	assert.deepStrictEqual(isAspirated(), false)
})

test(`isAspirated("") | expects: false | empty input string`, () => {
	assert.deepStrictEqual(isAspirated(""), false)
})

test(`isAspirated("ㅋ") | expects: true | aspirated letter`, () => {
	assert.deepStrictEqual(isAspirated("ㅋ"), true)
})

test(`isAspirated("ᄏ") | expects: true | non-compatibility aspirated letter`, () => {
	assert.deepStrictEqual(isAspirated("ᄏ"), true)
})

test(`isAspirated("ㄲ") | expects: false | non-aspirated letter`, () => {
	assert.deepStrictEqual(isAspirated("ㄲ"), false)
})

test(`isAspirated("a") | expects: false | non-hangul letter`, () => {
	assert.deepStrictEqual(isAspirated("a"), false)
})
