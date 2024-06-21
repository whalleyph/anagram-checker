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

function countOccurences(inputString) {
    const results = {}
    for (let i of inputString) {
      let letter = i.toLowerCase(); //case insensitive
      if (letter in results) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
    return results;
  }
//compares objects like: {h: 1, e: 2},{h:1, e: 2}
function compareObject(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (!keys2.includes(key) || !compareObject(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true
}

export { isAnagram, countOccurences, compareObject };
