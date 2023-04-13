// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += `... ${arr[i]} \u2103 in ${i + 1} days `;
  }
  return res;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
// console.log('hello');
