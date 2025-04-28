// given the following array, randomize (shuffle) it.

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

const students = [
  'Dan',
  'Brack',
  'Erin',
  'Geordyn',
  'Jess',
  'Sarah',
  'Andrew',
  'Ryan',
  'Tim',
  'Stephen',
  'David',
  'Mark',
]

function randomArray(arr) {
  function randomNumber() {
    return Math.floor(Math.random() * arr.length - 1)
  }
  const newArr = []
  while (arr.length > 0) {
    newArr.push(arr.splice(randomNumber(), 1)[0])
  }
  return newArr
}

function randomize(arr) {
  const randArr = []
  function randomNum() {
    return Math.floor(Math.random() * arr.length - 1)
  }
  while (arr.length > 0) {
    randArr.push(arr.splice(randomNum(), 1)[0])
  }
  return randArr
}
