// if a is an array, return max depth
// of each element in array
// add 1 to increase depth
// if a is int, return 0

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
 */

const f = (a) => (a[0] ? Math.max(...a.map(f)) + 1 : 0)
