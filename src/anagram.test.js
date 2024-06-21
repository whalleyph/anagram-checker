import { isAnagram, compareObject } from "./anagram.js";
import { test, expect } from "@jest/globals";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("check for case insesitive anagrams", () => {
  expect(isAnagram('hello', 'HELLO')).toBe(true);
  expect(isAnagram('abcdefghijklmnopqrstuvwxyz', 'abcdeflhijkgmnopqrstuvwxyz')).toBe(true);
  expect(isAnagram('nigHt', 'lIght')).toBe(false);
  expect(isAnagram('hello','helllo')).toBe(false);
  expect(isAnagram('','')).toBe(true);
  expect(isAnagram('peach', 'cheap')).toBe(true);
  expect(isAnagram('knight', 'night')).toBe(false);
  expect(isAnagram('bbbhellobbb','aaahelloaaa')).toBe(false)
  expect(isAnagram('abb','baa')).toBe(false)
});

test("Compare 2 objects", () => {
  expect(compareObject({h: 1, e: 2},{h:1, e: 2})).toBe(true)
  expect(compareObject({h: 1, e: 2},{h:1, e: 1})).toBe(false)
})