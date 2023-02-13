function moveZeros(arr) {
  console.log(arr);
  zero = [];
  otherArr = [...arr];
  for (var i = 0; i < arr.length; i++) {
    console.log(typeof otherArr[i]);
    if (otherArr[i] == 0 && typeof otherArr[i] == Number) {
      zero.push(0);
      otherArr[i] = "";
    }
  }
  otherArr = otherArr.filter((item) => {
    return item !== "";
  });
  console.log(otherArr.concat(zero));
  return otherArr.concat(zero);
}

/**
 * other solution- smart version
 * var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
 */

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); //, [1, 2, 1, 1, 3, 1, 0, 0, 0, 0];
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]

/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

 */
