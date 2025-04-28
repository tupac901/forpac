// write a function that reverses the contents of an array
// bonus points:
// try reversing it in place (without creating a new array). example:
// reverseArray([1, 8, 39, null, 2, 9, 'bob'])[0] // should equal => 'bob'

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

const reverse = (a) => a.reverse()

//
var reverseArray = function (array) {
  const result = []
  while (array.length > 0) {
    result.push(array.pop())
  }
  return result
}

//
var reverseArray = function (array) {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    swap(array, start, end)
    start += 1
    end -= 1
  }
  return array
}

var swap = function (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
