/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


let fullName = "Anastasiya Shvydko";
let currentYear = new Date().getFullYear();
let profilePicture = "images/my_photo.jpeg"

/* Step 3 - Element Variables */

let nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

let imageElement = document.querySelector('img');






/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture );

nameElement.setAttribute('class', 'myClass')



/* Step 5 - Array */

let food = ['Fish', 'Meat']

foodElement.innerHTML = food

let new_food = "Rice"


food.push(new_food)
foodElement.innerHTML += `<br>${food}`
food.shift()
foodElement.innerHTML += `<br>${food}`
food.pop()
foodElement.innerHTML += `<br>${food}`



