const $main = $("main")


function searchGiphy() {
    //save userInput as a variable 
    var userInput = $('#search-btn').val();

    //save Giphy API as a variable 
    var API_KEY = "qSwLz5wu3cAdpdcewt3XdcFvo77asCUu"
    var BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}&limit=25&offset=0&rating=g&lang=en`

    $main.empty()
    var imageLinks = []
    
    // make our request
    $.ajax(BASE_URL).then(
        function(data) {
            data.data.forEach(element => {
                var giphyPath = element.images.fixed_height.url
                imageLinks.push(giphyPath)

                $(document).ready(function(){
                    var img = new Image()
                    img.src = giphyPath
                    $main.append(img)
                })
            }
    )}
    
    )}

