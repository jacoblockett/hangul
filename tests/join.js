import test from "node:test"
import assert from "node:assert"
import join from "../lib/join.js"

test(`join(123) | expects: TypeError | input string is not a string`, () => {
	assert.throws(() => join(123), TypeError)
})

test(`join("") | expects: "" | empty input string`, () => {
	assert.deepStrictEqual(join(""), "")
})

test(`join(" ") | expects: " " | whitespace only input string`, () => {
	assert.deepStrictEqual(join(" "), " ")
})

test(`join("ㅎㅏㄴ") | expects: "한" | join with loose letters`, () => {
	assert.deepStrictEqual(join("ㅎㅏㄴ"), "한")
})

test(`join("ㄱ가") | expects: "까" | join with loose letters and blocks mixed together`, () => {
	assert.deepStrictEqual(join("ㄱ가"), "까")
})

test(`join("ㄱ가", { split: false }) | expects: "ㄱ가" | join with no preprocessing (splitting) beforehand`, () => {
	assert.deepStrictEqual(join("ㄱ가", { split: false }), "ㄱ가")
})

test(`join("ㅅㅅㅏ") | expects: "싸" | join with loose double letters`, () => {
	assert.deepStrictEqual(join("ㅅㅅㅏ"), "싸")
})

test(`join("ㅎㅏㄴㄱㅏ") | expects: "한가" | join with loose letters into multiple blocks`, () => {
	assert.deepStrictEqual(join("ㅎㅏㄴㄱㅏ"), "한가")
})

test(`join("aㅎㅏㄴ!") | expects: "a한!" | join with non-hangul characters`, () => {
	assert.deepStrictEqual(join("aㅎㅏㄴ!"), "a한!")
})

test(`join("aㅎㅏ@ㄴ!") | expects: "a하@ㄴ!" | join with non-hangul characters in mixed positions`, () => {
	assert.deepStrictEqual(join("aㅎㅏ@ㄴ!"), "a하@ㄴ!")
})
