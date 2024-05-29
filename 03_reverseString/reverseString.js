const reverseString = function(string) {
    // change string into array
    const arrayString = string.split('');

    // reverse array
    const reverseArray = arrayString.reverse();

    // join array to become one word
    const reverseString = reverseArray.join('');

    return reverseString;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
