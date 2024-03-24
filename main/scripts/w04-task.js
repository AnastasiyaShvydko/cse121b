/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Anastasiia Shvydko",
    photo: "images/my_photo.jpeg",
    favoriteFoods: [
        'Fish',
        'Meat'
    ],
    hobbies: [
        'gym',
        'watching movies',
        'baking'
    ],
    placesLived: []


};


/* Populate Profile Object with placesLive objects */
let place_1 = {
    place: 'Montenegro',
    length: '1 year'
};
let place_2 = {
    place: 'Serbia',
    length: '2 months'
};

myProfile.placesLived.push(place_1);
myProfile.placesLived.push(place_2);




/* DOM Manipulation - Output */


/* Name */
document.querySelector("#name").innerHTML = myProfile.name;

/* Photo with attributes */

let photo = document.querySelector('img');
photo.setAttribute('src', myProfile.photo );
photo.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
let foodList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(element => {
    let newElement = document.createElement("li");
    newElement.innerHTML = element
    foodList.appendChild(newElement);
})
/* Hobbies List */
let hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(element => {let newElement = document.createElement("li");
newElement.innerHTML = element
hobbiesList.appendChild(newElement)});


/* Places Lived DataList */


let placesList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(element => {  
    let newElementdt = document.createElement("dt");
    let newElementdd = document.createElement("dd");
    newElementdt.innerHTML = element.place;
    newElementdd.innerHTML = element.length;
    placesList.appendChild(newElementdt);
    placesList.appendChild(newElementdd);
});

function page(){
    let pagination = 10;
    let i = 1;
    while ( i <= pagination ) {
        console.log('pass');
    i++;
    }
}
page();

let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
let dose = esomeprazole['amount'];
let dose_1 = esomeprazole.amount;
console.log(dose);
console.log(dose_1);