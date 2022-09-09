// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //set up variables
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    //set up functions
      /*alphabetShifter will take an alphabet and return a 
      new alphabet shifted however many spaces are inputed*/
    function alphabetShifter(alphabet, shiftNumber) {

      let newAlphabet = "";
      //Loop iteration gets the index of alphabet
      for (let letter in alphabet) {
          //Change the data from string to integer
          let index = Number(letter);
          //Index of letter moves however many spaces shift specifies
          let newIndex = index + shiftNumber;
          //If the index falls within the 26 letter alphabet the index will shift to the right or left 
          //depending on the shif direction.
          newAlphabet += alphabet[(newIndex - 26) % alphabet.length] || alphabet[(newIndex + 26) % alphabet.length];
      }
      return newAlphabet;
    
    }
  

  //Message coder will encode the message to a new alphabet
  function messageCoder(inputMessage, alphabet, alphabetToCodeTo) {
    let codedMessage = "";
    let message = inputMessage.toLowerCase()
    //Iterate through the message to check for non-alphabetical characters and spaces.
    for(let letter in message) {
        if(!alphabetToCodeTo.includes(message[letter])) {
            codedMessage += message[letter]
        } else {
            let index = alphabet.indexOf(message[letter]);
            codedMessage += alphabetToCodeTo[index];
            }
        }
    return codedMessage
}

  //Message decoder
  function messageDecoder(inputMessage,alphabet ,encodedAlphabet) {
    let decodedMessage = "";
    let message = inputMessage.toLowerCase()

    //Iterate through the message letter index
    for(let letterIndex in message) {
        //If spaces or other characters are included then add them to the new message
        if(!encodedAlphabet.includes(message[letterIndex])) {
            decodedMessage += message[letterIndex];
        } else {
            let index = encodedAlphabet.indexOf(message[letterIndex])
            decodedMessage += alphabet[index];
        }
    }
    return decodedMessage;
}
  // Main body
  //check for initial shift conditions that result in false if not met
    if (!shift || shift < -25 || shift > 25) {
        return false;
    } else { 
        //The encode parameter will dictate whether the function will decode(false) or encode(true)
        if(encode == true) {
        const newCodeAlphabet = alphabetShifter(alphabet, shift, encode);
        const resultMessage = messageCoder(input, alphabet, newCodeAlphabet);
        return resultMessage
      } else {
        const newCodeAlphabet = alphabetShifter(alphabet, shift, encode);
        const resultMessage = messageDecoder(input, alphabet, newCodeAlphabet);
        return resultMessage
      }
    }
  };      
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

