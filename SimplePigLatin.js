function pigIt(str) {
  arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    const chr = /[!?$%]/g;

    fstWord = arr[i][0];
    if (!arr[i].match(chr)) {
      arr[i] = arr[i].slice(1) + fstWord + "ay";
    } else {
      arr[i] = arr[i];
    }
  }
  console.log(arr.join(" "));
  return arr.join(" ");
}

pigIt("Pig latin is cool"); //, "igPay atinlay siay oolcay");
pigIt("This is my string"); //, "hisTay siay ymay tringsay");
pigIt("O tempora o mores !");
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

 */
