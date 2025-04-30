const removeFromArray = function(collection, number) {

    let removed = [];

    for(item of collection){

        if(item != number){

            removed.push(item);
        }
    }

    return removed;

};

// Do not edit below this line
module.exports = removeFromArray;
