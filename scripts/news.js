fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=250dec31253143d0a5a116e027c8800c")
.then(res => res.json())
.then(data => {

    console.log(data)



 // First Card
    document.querySelector(".firstTitle").innerHTML = data.articles[0].content;
    document.querySelector(".firstParagraph").innerHTML = data.articles[0].description
    document.querySelector(".firstImage").innerHTMl = data.articles[0].urlToImage

    // Second Card
    document.querySelector(".secondTitle").innerHTML = data.articles[1].content;
    document.querySelector(".secondParagraph").innerHTML = data.articles[1].description

   // document.querySelector(".firstCard #firstImage").innerHTMl = data.articles[1].urlToImage

// First Card
    document.querySelector(".thirdTitle").innerHTML = data.articles[2].content;
    document.querySelector(".thirdParagraph").innerHTML = data.articles[2].description

  //  document.querySelector(".firstCard #firstImage").innerHTMl = data.articles[0].urlToImage













// Create a new Div
    let happyDays = document.querySelector(".happyDays")
    let newImage = document.createElement("img");
        newImage.id = "firstImage"
        newImage.src = data.articles[0].urlToImage

        happyDays.appendChild(newImage)



})