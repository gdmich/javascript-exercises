const repeatString = function(phrase, repeats) {

    if(repeats < 0){

        return "ERROR";
    }

    let repeated = "";
    
    for(;repeats >0; repeats--){
        repeated += phrase;
    }

    return repeated;

};

// Do not edit below this line
module.exports = repeatString;
