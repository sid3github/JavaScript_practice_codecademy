// created a constant named kelvin and assigned a value to it.
const kelvin = 0;
// created a constant named celsius stored the equation of kelvin - 273.
const celsius = kelvin - 273;

// created a constant named fahrenheit and stored the equation which includes celsius equation and fahrenheits equation.
// Math.floor() is to round down the decimal value because converting celsius to fahrenheit gives decimal value.
const fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit');

// converting celsius to newton.
const celsius = 28;

const newton = Math.floor(celsius * (33/100));

console.log(newton);