const convertToCelsius = function(fahrenheit) {
  // fahrenheit to celsius equation
  let celsius = (fahrenheit - 32) * (5 / 9)
  return celsius; 
};

const convertToFahrenheit = function(celsius) {
  //celsius to fahrenheit equation
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};