// take roman numeral as input. write function that converts this to regular number.

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const numeralVals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function translateRomanNumeral(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    throw 'only strings acceptable!'
  }
  const text = romanNumeral.toUpperCase()
  for (var i = 0; i < text.length; i++) {
    if (!numeralVals[text[i]]) {
      throw 'enter valid numeral!'
    }
  }
  if (romanNumeral === '') {
    return 0
  }
  let sum = numeralVals[text[text.length - 1]]
  for (var i = text.length - 2; i >= 0; i--) {
    sum +=
      getsign(numeralVals[text[i]] - numeralVals[text[i + 1]]) *
      numeralVals[text[i]]
  }
  return sum
}

function getsign(a) {
  return a < 0 ? -1 : 1
}
