const sumAll = function(lower, upper) {

    if(lower < 0 ||typeof lower != "number" || typeof upper != "number" || !Number.isInteger(lower) || !Number.isInteger(upper)){

        return "ERROR";
    }

    let sum = 0;
    
    if(lower < upper){

        for(lower; lower <= upper; lower++){

            sum += lower;
    
        }

    }
    else{

        for(upper; upper <= lower; upper++){

            sum += upper;
        }
    }


    return sum;

};

// Do not edit below this line
module.exports = sumAll;
