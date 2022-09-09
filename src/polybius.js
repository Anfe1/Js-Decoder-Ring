// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //Constant variables
    const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
     'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
      'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
       'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
   
    const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
    '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k',
      '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
      '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
        '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };


    //functions
    //Will code a message by matching each letter to the encoder object
    function code(inputMessage) {
      let message = inputMessage.toLowerCase();
  
      return message.match(/[0-9]{2}|[a-z]|\s/g)
          .map(letter => encoder[letter] || letter)
          .join('');
  }
    //Will decode a message by matching each letter to the decoder object
    function decode(inputMessage) {
        //removes white spaces
        let removed = inputMessage.replace(/\s+/g, '');
        //Tests if the input is even to return the decoded message, if odd returns false.
        if (removed.length % 2 == 0) {
        return inputMessage.match(/[0-9]{2}|[a-z]|\s/g)
        .map(number => decoder[number] || number)
        .join('');
      } else {
        return false
      };
    };

    //Main code, if encode = true then code message, if false then decode message
    if(encode == true) {
      return code(input);
    } else {
      return decode(input);
    };
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
