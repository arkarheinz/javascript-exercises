const leapYears = function(year) {
    let dividedByFour = year % 4;
    let dividedByHundred = year % 100;
    let dividedByFourHundred = year % 400;
    
    if (dividedByFour === 0 && (dividedByHundred !== 0 || dividedByFourHundred === 0)) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(2000));
console.log(leapYears(1985));

// Do not edit below this line
module.exports = leapYears;
