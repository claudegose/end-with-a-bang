fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=250dec31253143d0a5a116e027c8800c")
.then(res => res.json())
.then(data => {

    console.log(data)



 // First Card
    document.querySelector(".firstTitle").innerHTML = data.articles[0].title;
    document.querySelector(".firstParagraph").innerHTML = data.articles[0].content
   // Image Element Create Dynamically

    var img1 = document.createElement("img")
    img1.src = data.articles[0].urlToImage;
    document.getElementById("firstImage").append(img1)


    // Second Card
    document.querySelector(".secondTitle").innerHTML = data.articles[1].title;
    document.querySelector(".secondParagraph").innerHTML = data.articles[1].content

   // document.querySelector(".firstCard #firstImage").innerHTMl = data.articles[1].urlToImage
    var img2 = document.createElement("img")
    img2.src = data.articles[1].urlToImage
    document.getElementById("secondImage").append(img2)



    // Third Card
    document.querySelector(".thirdTitle").innerHTML = data.articles[2].title;
    document.querySelector(".thirdParagraph").innerHTML = data.articles[2].content

    var img3 = document.createElement("img")
    img3.src = data.articles[2].urlToImage
    document.getElementById("thirdImage").append(img3)



    // Fourth Card
    document.querySelector(".fourthTitle").innerHTML = data.articles[3].title;
    document.querySelector(".fourthParagraph").innerHTML = data.articles[3].content

    // Image Element Create Dynamically

    var img4 = document.createElement("img")
    img4.src = data.articles[3].urlToImage;
    document.getElementById("fourthImage").append(img4)

    // Fifth Card
    document.querySelector(".fifthTitle").innerHTML = data.articles[4].title;
    document.querySelector(".fifthParagraph").innerHTML = data.articles[4].content
    // Image Element Create Dynamically

    var img5 = document.createElement("img")
    img5.src = data.articles[4].urlToImage;
    document.getElementById("fifthImage").append(img5)

    // Sixth Card
    document.querySelector(".sixthTitle").innerHTML = data.articles[5].title;
    document.querySelector(".sixthParagraph").innerHTML = data.articles[5].content
    // Image Element Create Dynamically

    var img6 = document.createElement("img")
    img6.src = data.articles[5].urlToImage;
    document.getElementById("sixthImage").append(img6)



})