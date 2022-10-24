function searchGiphy() {
    //save userInput as a variable 
    var userInput = document.getElementById("input").value
    console.log(userInput)

    //save Giphy API as a variable 
    var API_KEY = ""
    var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}&limit=1&offset=0&rating=g&lang=en`

    fetch(BASE_URL).then(function(data) {
    console.log(data.json()) 
    })
}