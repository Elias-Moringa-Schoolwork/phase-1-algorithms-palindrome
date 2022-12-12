function isPalindrome(word) {
  // Write your algorithm here
  const reverse=word.split('').reverse().join('');
  if(word===reverse){
    return true
  }else{
    return false
  }
}
isPalindrome('')
/* 
  Add your pseudocode here
  create isPalindrome(word) function
  const reverse=word.split('').reverse().join('');
  if word===reverse eturn true, else return false
*/

/*
  Add written explanation of your solution here
  -initialize a function isPalindrome with a string argument called word
  -initialize a value reverse
  -create an array of individual values in the word array using split() function
  -reverse the order of the values with reverse() function
  -join the values back together using join() function
  -check if word is a palindrome using ifelse statement
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
