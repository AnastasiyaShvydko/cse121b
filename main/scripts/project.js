
const user_input = document.getElementById("user_input");
const question = document.getElementById("question");
const responseInfo = document.getElementById("info");
const answer = document.getElementById("answer");







let getUserInput = () =>{
    
}
let getQuestionsList = async () =>{
    const response = await fetch('./text.txt')
    if(response.ok){
        let questionsList = await response.json();

        return questionsList;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


let getQuestion = async () =>{
    user_input.value = "";
    responseInfo.innerHTML = "";
    let questionsIterable = await getQuestionsList();
    let questionsList = Array.from(questionsIterable);

    questionsList.forEach(element => {
        console.log(element.question)
    }
    )
  
    let index = getRandomInt(questionsList.length );
    console.log(questionsList.length);
    console.log(index);
    question.innerHTML = questionsList[index].question;
    answer.innerHTML = questionsList[index].answer;

}



let getInfo = async () =>{
    const apiKey ="WsNh4ewn9JOoxgu0wUBk9Q==5jCzODqPJVZIWKMI";
    const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${user_input.value}`,{
        method: "GET",
        headers: {
            
         'X-Api-Key': `${apiKey}`
    
        }
      });
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        let info = await response.json();
        //console.log(info[0].name);
        return info;}
}



let getResult = async () =>{
    let info = [];
    info = await getInfo();
    return info;
}



let showResult = async () =>{
    console.log(user_input);
    console.log(answer);

 
    if(user_input.value.toLowerCase() == answer.innerHTML.toLowerCase()){

        let resultList = await getResult();
        console.log(resultList)
        responseInfo.innerHTML = "";
        resultList.forEach(element => {
            let div = document.createElement("div");
            div.classList.add("card");
            let responseList =  document.createElement("ul");
            let name = document.createElement("h3");
            name.innerHTML = element.name;
            let elementList_location = document.createElement("li");
            elementList_location.innerHTML = `<span id="line_header">Location</span>: ${element.locations}`;
            let elementList_characteristics_prey = document.createElement("li");
            if (element.characteristics.main_prey != null){
                elementList_characteristics_prey.innerHTML = `<span id="line_header">Prey</span>: ${element.characteristics.main_prey}`;
            }
            else if(element.characteristics.prey != null){
                elementList_characteristics_prey.innerHTML = `<span id="line_header">Prey</span>: ${element.characteristics.prey}`;
            }
            else{
                elementList_characteristics_prey.innerHTML = "";
            }
            let elementList_characteristics_height = document.createElement("li");
            
            if(element.characteristics.height != null){
                elementList_characteristics_height.innerHTML = `<span id="line_header">Height</span>: ${element.characteristics.height}`;
            }
            else if (element.characteristics.length != null){
                elementList_characteristics_height.innerHTML = `<span id="line_header">Height</span>: ${element.characteristics.length}`;
            }
            else{
                elementList_characteristics_height.innerHTML = "";
            }
            let elementList_characteristics_weight = document.createElement("li");
            
            if(element.characteristics.weight != null){
                elementList_characteristics_weight.innerHTML = `<span id="line_header">Weight</span>: ${element.characteristics.weight}`;
            }
            else{
                elementList_characteristics_weight.innerHTML = "";
            }
       
        // elementList_characteristics =  ;

        // elementList_characteristics.forEach(element => {
        //     let charactElement = document.createElement("li");
        //     charactElement.innerHTML = element;
        // })
       
            responseInfo.appendChild(div);
            div.appendChild(name);
            div.appendChild(responseList);
            responseList.appendChild(elementList_location);
            responseList.appendChild(elementList_characteristics_prey);
            responseList.appendChild(elementList_characteristics_height);
            responseList.appendChild(elementList_characteristics_weight);
        })}
    else{

        responseInfo.innerHTML = "Try again";
        };
    
    
   
}

const answer_btn = document.querySelector("#answer_btn").addEventListener('click', showResult);
const again_btn = document.querySelector("#again_btn").addEventListener('click', getQuestion);
getQuestion();
//showResult();