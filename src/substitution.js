// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    //variables
    const stdAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //Functions
    /*Will compare the coded alphabet and the standard alphabet
    after the index of the message has been generated based on
    the standard alphabet*/
    function messageIndexer(alphabet, inputMessage, codedAlphabet) {
    let messageResult = "";
    message = inputMessage.toLowerCase(); 
      //Iterates through letter indexes of the message to compare the substitution alphabet and
      //the standard alphabet after the input index has been translated
     for(let letterIndex of message) {
          let newIndex = alphabet.indexOf(letterIndex)
          messageResult += codedAlphabet[newIndex] || letterIndex;
     } 
     return messageResult;
    }
    /*Checks the given string to see if there are any duplicates
    if there are returns false*/
    function containsDuplicates(inputAlphabet) {
      let uniqueChars = ""
      for (let letter of inputAlphabet) {
          if (uniqueChars.includes(letter)) {
            return true;
          } else {
            uniqueChars += letter
          };
      };
  };
    //Main code, codes or ecodes. Will return false if alphabet is empty or not exacty 26 characters long
    //If duplicates are found return false
    if(!alphabet || alphabet.length !== 26 || containsDuplicates(alphabet)) {
      return false
    }
    //Encodes message if encode value is true, decodes message if encode value is false.
    if(encode == true) {
      return messageIndexer(stdAlphabet, input, alphabet)
    } else {
      return messageIndexer(alphabet, input, stdAlphabet)
    }
}    
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
