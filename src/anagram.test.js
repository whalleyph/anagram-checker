import { isAnagram } from "./anagram.js";
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
});