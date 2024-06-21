/** Adds two given numbers, returning the sum.
 * @param {string} string1
 * @param {String} string2
 * @returns {boolean} the sum of a and b
 */
function isAnagram(string1, string2) {
  const occurences = {};
  if (!(string1.length === string2.length)) {
    return false;
  }

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  for (let letter of string1) {
    if (!occurences.hasOwnProperty(letter)) {
      occurences[letter] = 1;
    } else {
      occurences[letter] += 1;
    }
  }

  for (let letter of string2) {
    if (!(letter in occurences)) {
      return false;
    } else {
      occurences[letter] -= 1;
    }
  }

  for (let letter in occurences) {
    if (occurences[letter] !== 0) {
      return false;
    }
  }

  return true;
}

export { isAnagram };
