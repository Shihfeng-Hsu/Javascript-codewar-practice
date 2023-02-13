function solution(string) {
  arr = string.split("");
  for (i in arr) {
    if (i != 0) {
      if (arr[i] == arr[i].toUpperCase()) {
        arr[i] = [" ", arr[i]];
      }
    }
  }
  console.log(arr.flat().join(""));
  return arr.flat().join("");
}

/*
 const solution = string => string.replace(/[A-Z]/g, ' $&');
 */

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

solution("camelCasing"); //,"camel Casing",

solution("camelCasingTest"); //,"camel Casing Test",
