const reverseString = function(phrase) {

    let reversed = "";
    let i = phrase.length-1;
    
    for(i; i > -1; i--){

        reversed += phrase[i];

    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
