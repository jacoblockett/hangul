import test from "node:test"
import assert from "node:assert"
import isFortis from "../lib/isFortis.js"

test(`isFortis() | undefined input string`, () => {
	assert.deepStrictEqual(isFortis(), false)
})

test(`isFortis("") | empty input string`, () => {
	assert.deepStrictEqual(isFortis(""), false)
})

test(`isFortis("ㄲ") | tensed letter`, () => {
	assert.deepStrictEqual(isFortis("ㄲ"), true)
})

test(`isFortis("ㄱ") | non-tensed letter`, () => {
	assert.deepStrictEqual(isFortis("ㄱ"), false)
})

test(`isFortis("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isFortis("a"), false)
})
