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

// Race Day
let raceNumber = Math.floor(Math.random() * 1000);

let  runner = false;
runner ? console.log('Early Registered') : console.log('Late Registered');
console.log(runner);

let runnerAge = 18;

if (runnerAge > 18 && runner == true){
  raceNumber += 1000;
}
if (runnerAge > 18 && runner == true){
console.log('your race will start at 9:30 and your race number is ' + raceNumber);
}
else if (runnerAge > 18 && runner != true){
  raceNumber += 1000;
  console.log('your race will start at 11:00 and your race number is ' + raceNumber);
}
else if (runnerAge < 18){
  raceNumber;
  console.log('your race will start at 12:30 and your race number is ' + raceNumber);
}
else{
  console.log('please go to the registration desk');
}


//Taking orders.
let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};
const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
};
const getTotal = (itemCount) => {
  return getSubTotal(itemCount) + getTax(itemCount);
};

console.log(getSubTotal(orderCount));
console.log(getTotal(orderCount));



// Rock, Paper and Scissors Game.

const getUserChoice = (userInput) => {
    let data = userInput.toLowerCase();
 if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  return userInput;
 }else{
   console.log('error,please enter correct input');
 }
};
//console.log(getUserChoice('rock'));

const getComputerChoice = () => {
 let info = Math.floor(Math.random() * 3);
 switch(info){
   case 0:
     return 'rock';
     break;
   case 1:
     return 'paper';
     break;
   case 2:
     return 'scissor';
     break;
 }
};
//console.log(getComputerChoice());

const determineWinner = (userChoice,computerChoice) => {
 if(userChoice === computerChoice){
   return 'the game was a tie';
 }
 
 if(userChoice === 'rock'){ // if user places rock.
        if(computerChoice === 'paper'){ // if comp places paper.
     return 'computer won';
   }else{
     return 'user won';
   }   
 }
 
 if(userChoice === 'paper'){ // if user places paper.
   if(computerChoice === 'rock'){ // if comp places rock.
     return 'user won';
   }
   else if(computerChoice === 'scissor'){ // also if comp places scissor.
     return 'computer won';
   }
 }
 
 if(userChoice === 'scissor'){ // if user places scissor.
   if(computerChoice === 'rock'){// if comp places rock.
     return 'computer won';
   }
   else if(computerChoice === 'paper'){// if comp places paper.
     return 'user won';
   }
 }
};
//console.log(determineWinner('paper','rock'));


const playGame = () => {
 let userChoice = getUserChoice('rock');
 let computerChoice = getComputerChoice();
 console.log(determineWinner(userChoice,computerChoice));
};

playGame();


//Data Structures: Copy an Array with the Spread Operator.

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr = [[...arr],...newArr];
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
console.log(copyMachine(['it works'], 3));












 