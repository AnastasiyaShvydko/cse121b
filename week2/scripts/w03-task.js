/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    let a = number1;
    let b = number2
    let sum = a + b;
    return sum;
}
function addNumbers(){
    let Number1 = Number(document.querySelector("#add1").value);
    let Number2 = Number(document.querySelector("#add2").value);
    let sum = add(Number1,Number2);
    document.getElementById('sum').value = sum;
}

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1-number2;
  }
const subtractNumbers = function(){
    let Number1 = Number(document.querySelector("#subtract1").value);
    let Number2 = Number(document.querySelector("#subtract2").value);
    let difference = subtract(Number1,Number2);
    document.getElementById('difference').value = difference;

}


/* Arrow Function - Multiply Numbers */
const multiply = (Number1, Number2) => Number1 * Number2;
const multiplyNumbers = () => {
    let Number1 = Number(document.querySelector("#factor1").value);
    let Number2 = Number(document.querySelector("#factor2").value);
    let product = multiply(Number1,Number2);
    document.getElementById('product').value = product;
}


/* Open Function Use - Divide Numbers */
const  divide = (Number1, Number2) => Number1/Number2;
const divideNumbers = () => {
    let Number1 = Number(document.querySelector("#dividend").value);
    let Number2 = Number(document.querySelector("#divisor").value);
    let quotient = divide(Number1,Number2);
    document.getElementById('quotient').value = quotient;
}


/* Decision Structure */
const getTotal = () => {
    let total = 6;
    let subtotal = Number(document.querySelector("#subtotal").value);
    let member = document.getElementById("member");
    if(member.checked == true){
        total = subtotal - subtotal*0.2;
    }
    document.getElementById('total').innerHTML = `${total.toFixed(2)}`;
}

document.getElementById('getTotal').addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let sourceArray = [];
for (let i = 1; i <= 13; i++) {
    sourceArray.push(i);
  }
document.querySelector('#array').innerHTML = sourceArray;
/* Output Odds Only Array */
let oddArray = sourceArray.filter(number => number % 2 != 0);
document.getElementById('odds').innerHTML = oddArray;
/* Output Evens Only Array */
let evenArray = sourceArray.filter(number => number % 2 === 0);
document.getElementById('evens').innerHTML = evenArray;
/* Output Sum of Org. Array */
let sumOfArray = sourceArray.reduce((total,value) => total + value);
document.getElementById('sumOfArray').innerHTML = sumOfArray;
/* Output Multiplied by 2 Array */
let multiplyedArray = sourceArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multiplyedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplyed = multiplyedArray.reduce((total, value ) => total + value);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplyed;

document.querySelector("#addNumbers").addEventListener('click', addNumbers);
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

