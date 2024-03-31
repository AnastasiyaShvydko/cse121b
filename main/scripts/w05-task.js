/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = templeList => {
    templeList.forEach(element => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerHTML = element.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', element.imageUrl);
        img.setAttribute('alt', element.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);



    });
}

/* async getTemples Function using fetch()*/
let getTemples = async () =>{
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        templeList = await response.json();}
}

/* reset Function */
let reset = () =>{
    templesElement.replaceChildren();
}

/* filterTemples Function */
let filterTemples = (temples) =>{
    reset();
    let filter = document.getElementById('filtered').value;
    switch(filter) {
        case 'utah':
            let utahList =[]
            temples.forEach(element => {
                if(element.location.includes("Utah")){
                    utahList.push(element);
                }
            })
            displayTemples(utahList);
          // code block
          break;
        case 'notutah':
            let notutahList =[];
            temples.forEach(element => {
                if(element.location.includes("Utah") == false){
                    notutahList.push(element);
                }
            })
            displayTemples(notutahList);
          // code block
         
          
        case 'older':
            let olderList =[];
            temples.forEach(element => {
                if(new Date(element.dedicated) < new Date(1950, 0, 1)){
                    olderList.push(element);
                }
            })
           
            displayTemples(olderList);
            break;

        default:
          // code block
          displayTemples(temples);
      }

}

getTemples();

/* Event Listener */

document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)})
