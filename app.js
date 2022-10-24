function searchGiphy() {
    //save userInput as a variable 
    var userInput = document.getElementById("input").value
    console.log(userInput)

    //save Giphy API as a variable 
    var API_KEY = ""
    var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}&limit=1&offset=0&rating=g&lang=en`

    //get the data point we want and save is as giphyPath
    $.ajax(BASE_URL).then(function(data) {
    console.log(data.data[0].images.fixed_height.url) 
    var giphyPath = data.data[0].images.fixed_height.url

    //create img element 
    var img = document.createElement("img")
    //add src to img 
    img.setAttribute("src", giphyPath)
    //add img to body as a child element 
    document.body.appendChild(img)
    
    })
}