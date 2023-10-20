function isPalindrome(word) {
  // Write your algorithm here
  const palindrome = word.split("").reverse().join("")

  if(word === palindrome){
    return true;
  } else{
    return false;
  }
}

/* 
  Add your pseudocode here

  input = String
  output = Boolean

  Function takes in a string
  Uses if function to check whether its a paindrome or not
  returns true if its a palindrome and false if not
*/

/*
  Add written explanation of your solution here

  case 1:
  word = racecar
  function checks if racecar === racecar(racecar spelled backwards)
  returns true if so
  i.e isPalindrome("racecar") => true

  case 2:
  word = conclusion
  Is conclusion === noisulcnoc(conclusion spelled backwards)
  returns false
  isPalindrome("conclusion") => false
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
