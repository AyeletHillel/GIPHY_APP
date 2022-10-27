function searchGiphy() {
    //save userInput as a variable 
    var userInput = $('#search-btn').val();

    //save Giphy API as a variable 
    var API_KEY = ""
    var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}&limit=25&offset=0&rating=g&lang=en`

    // make our request
    $.ajax(BASE_URL).then(function(data) {
    console.log(data.data[0].images.fixed_height.url) 
    var giphyPath = data.data[0].images.fixed_height.url

    // render the data
    const $main = $("main")
    $main.empty()

    $main.html(`
    <img src="${giphyPath}">
    `)
    
    })
}



