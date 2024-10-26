import test from "node:test"
import assert from "node:assert"
import join from "../lib/join.js"

test(`join(123) | input string is not a string`, () => {
	assert.throws(() => join(123), TypeError)
})

test(`join("") | empty input string`, () => {
	assert.deepStrictEqual(join(""), "")
})

test(`join(" ") | whitespace only input string`, () => {
	assert.deepStrictEqual(join(" "), " ")
})

test(`join("ㅎㅏㄴ") | join with loose letters`, () => {
	assert.deepStrictEqual(join("ㅎㅏㄴ"), "한")
})

test(`join("ㄱ가") | join with loose letters and blocks mixed together`, () => {
	assert.deepStrictEqual(join("ㄱ가"), "까")
})

test(`join("ㄱ가", { split: false }) | join with no preprocessing (splitting) beforehand`, () => {
	assert.deepStrictEqual(join("ㄱ가", { split: false }), "ㄱ가")
})

test(`join("ㅅㅅㅏ") | join with loose double letters`, () => {
	assert.deepStrictEqual(join("ㅅㅅㅏ"), "싸")
})

test(`join("ㅎㅏㄴㄱㅏ") | join with loose letters into multiple blocks`, () => {
	assert.deepStrictEqual(join("ㅎㅏㄴㄱㅏ"), "한가")
})

test(`join("aㅎㅏㄴ!") | join with non-hangul characters`, () => {
	assert.deepStrictEqual(join("aㅎㅏㄴ!"), "a한!")
})

test(`join("aㅎㅏ@ㄴ!") | join with non-hangul characters in mixed positions`, () => {
	assert.deepStrictEqual(join("aㅎㅏ@ㄴ!"), "a하@ㄴ!")
})
