import test from "node:test"
import assert from "node:assert"
import isConsonantCluster from "../lib/isConsonantCluster.js"

test(`isConsonantCluster() | undefined input string`, () => {
	assert.deepStrictEqual(isConsonantCluster(), false)
})

test(`isConsonantCluster("") | empty input string`, () => {
	assert.deepStrictEqual(isConsonantCluster(""), false)
})

test(`isConsonantCluster("ㄲ") | consonant cluster double letter`, () => {
	assert.deepStrictEqual(isConsonantCluster("ㄲ"), true)
})

test(`isConsonantCluster("ㄳ") | consonant cluster letter`, () => {
	assert.deepStrictEqual(isConsonantCluster("ㄳ"), true)
})

test(`isConsonantCluster("ㄱ") | non-consonant cluster letter`, () => {
	assert.deepStrictEqual(isConsonantCluster("ㄱ"), false)
})

test(`isConsonantCluster("ㅏ") | vowel letter`, () => {
	assert.deepStrictEqual(isConsonantCluster("ㅏ"), false)
})

test(`isConsonantCluster("a") | non-hangul letter`, () => {
	assert.deepStrictEqual(isConsonantCluster("a"), false)
})
