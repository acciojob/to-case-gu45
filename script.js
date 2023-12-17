function toCase(text) {
  // write your code here
let lower = text.toLowerCase()
let upper = text.toUpperCase()
let newstr = lower+"-"+upper
return newstr
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
