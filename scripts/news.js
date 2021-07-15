fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=250dec31253143d0a5a116e027c8800c")
.then(res => res.json())
.then(data => {

console.log(data)



 // First Card
    document.querySelector(".firstTitle").innerHTML = data.articles[0].title;
    document.querySelector(".firstParagraph").innerHTML = data.articles[0].content
   // Image Element Create Dynamically

    var img = document.createElement("img")
    img.src = data.articles[0].urlToImage
    document.getElementById("firstImage").append(img)


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

    // Seventh Card
    document.querySelector(".seventhTitle").innerHTML = data.articles[6].title;
    document.querySelector(".seventhParagraph").innerHTML = data.articles[6].content
    // Image Element Create Dynamically

    var img7 = document.createElement("img")
    img7.src = data.articles[6].urlToImage;
    document.getElementById("seventhImage").append(img7)


    // Eighth Card
    document.querySelector(".eighthTitle").innerHTML = data.articles[7].title;
    document.querySelector(".eighthParagraph").innerHTML = data.articles[7].content
    // Image Element Create Dynamically

    var img8 = document.createElement("img")
    img8.src = data.articles[7].urlToImage;
    document.getElementById("eighthImage").append(img8)

    // Nineth Card
    document.querySelector(".ninethTitle").innerHTML = data.articles[8].title;
    document.querySelector(".ninethParagraph").innerHTML = data.articles[8].content
    // Image Element Create Dynamically

    var img9 = document.createElement("img")
    img9.src = data.articles[8].urlToImage;
    document.getElementById("ninethImage").append(img9)

    // tenthth Card
    document.querySelector(".tenthTitle").innerHTML = data.articles[9].title;
    document.querySelector(".tenthParagraph").innerHTML = data.articles[9].content
    // Image Element Create Dynamically

    var img10 = document.createElement("img")
    img10.src = data.articles[9].urlToImage;
    document.getElementById("tenthImage").append(img10)

    // eleventh Card
    document.querySelector(".eleventhTitle").innerHTML = data.articles[10].title;
    document.querySelector(".eleventhParagraph").innerHTML = data.articles[10].content
    // Image Element Create Dynamically

    var img11 = document.createElement("img")
    img11.src = data.articles[10].urlToImage;
    document.getElementById("eleventhImage").append(img11)

    // twelfth Card
    document.querySelector(".twelfthTitle").innerHTML = data.articles[11].title;
    document.querySelector(".twelfthParagraph").innerHTML = data.articles[11].content
    // Image Element Create Dynamically

    var img12 = document.createElement("img")
    img12.src = data.articles[11].urlToImage;
    document.getElementById("twelfthImage").append(img12)


    // thirteen Card
    document.querySelector(".thirteenTitle").innerHTML = data.articles[12].title;
    document.querySelector(".thirteenParagraph").innerHTML = data.articles[12].content
    // Image Element Create Dynamically

    var img13 = document.createElement("img")
    img13.src = data.articles[12].urlToImage;
    document.getElementById("thirteenImage").append(img13)



    // fourteen Card
    document.querySelector(".fourteenTitle").innerHTML = data.articles[13].title;
    document.querySelector(".fourteenParagraph").innerHTML = data.articles[13].content
    // Image Element Create Dynamically

    var img14 = document.createElement("img")
    img14.src = data.articles[13].urlToImage;
    document.getElementById("fourteenImage").append(img14)



    // fifteen Card
    document.querySelector(".fifteenTitle").innerHTML = data.articles[14].title;
    document.querySelector(".fifteenParagraph").innerHTML = data.articles[14].content
    // Image Element Create Dynamically

    var img15 = document.createElement("img")
    img15.src = data.articles[14].urlToImage;
    document.getElementById("fifteenImage").append(img15)









})