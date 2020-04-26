let _ = require('underscore');
let arr = [1, 2, 3, 4, 5];
arr = _.without(arr, 5);
console.log(arr);
let arr1 = [1, 3, 41, 2, 3, 21, 35, 3, 2, 21];
let m = _.find(arr1, item => item % 5 == 0)
console.log(m) // 35