function validParentheses(parens) {
  while (parens.includes("()")) {
    parens = parens.replace(/\(\)/gi, "");
  }
  if (parens === "") {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// Great! This is my 'masterpiece'!

// function validParentheses(parens) {
//   // your code here ..
//   const arr = parens.split("");
//   let count = 0;
//   if (arr[0] === ")" || arr[arr.length - 1] === "(") {
//     console.log(false);
//     return false;
//   }
//   for (item of arr) {
//     if (item === "(") {
//       count++;
//     } else if (item === ")") {
//       count--;
//     }
//   }
//   if (count === 0) {
//     console.log("true");
//     return true;
//   }
//   console.log("false");
//   return false;
// }

validParentheses("("); //, false));
validParentheses(")"); //, false));
validParentheses(""); //, true));
validParentheses("()"); //, true));
validParentheses("())"); //, false));

/**
 * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100


 */
