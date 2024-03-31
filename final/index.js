let getInfo = async (url) =>{
    const response = await fetch("https://bible-api.com/john 3:16");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        let info = await response.json();
        console.log(info.verses[0].book_name);}
}

let responseInfo = document.getElementById("response")
getInfo();