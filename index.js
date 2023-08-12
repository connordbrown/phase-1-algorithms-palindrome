function isPalindrome(word) {
  let newWord = ''
  for(let i=(word.length-1); i >= 0; i--) {
    newWord += word[i];
  };
  return newWord === word;
}
/* 
  Create a new string by reversing the word passed in.
  Compare the original word and the new string. If equal, return true.
  Else return false.
*/
  
/*
  My function creates a new string, newWord, and uses a reverse
  for loop to populate it using letters from word. It then checks
  whether the two strings are equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("basket"));
}

module.exports = isPalindrome;
