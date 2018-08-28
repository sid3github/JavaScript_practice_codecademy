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


// Dog Years.
const myAge = 10;
let earlyYears = 2;
earlyYears = 2 * 10.5;
let laterYears = myAge - 2;
laterYears * 4;
console.log(earlyYears);
myAgeInDogsYears = earlyYears + laterYears;
const myName = 'Siddharth'.toLowerCase();
console.log('My name is ' + myName + ' i am ' + myAgeInDogsYears + ' years old in dog years.');


// Math.random().
function data(n){
  
    let result = Math.floor(Math.random() * Math.floor(n));
    return result;
    
  }
  console.log(data(3));


// Magic Five Ball.
let username = 'Siddharth';
username ? console.log('Hello ' + username) : console.log('Hello!');

let userQuetion = 'What will be your future?';
console.log(userQuetion);

let randomNumber = Mtah.floor(Math.random() * 4);
console.log(randomNumber);

let magicFiveBall = ''

switch(randomNumber){
    case 0:
    magicFiveBall = 'Sorry can not predict!';
    break;

    case 1:
    magicFiveBall = 'You will earn a fuck load of money!!';
    break;

    case 2:
    magicFiveBall = 'You will do just fine';
    break;

    case 3:
    magicFiveBall = 'You die as a cunt';
    break;
}

console.log(magicFiveBall);






















