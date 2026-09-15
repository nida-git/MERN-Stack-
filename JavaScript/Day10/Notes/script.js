console.dir(document)
// console.log(document);

document.title = "New title"
// ( document.all[6].innerText = "Hello world") 

// console.log(document.all[6]);
// document.all[6].onmouseover = document.all[6].innerText = "Hello world"

// Selecting elements by id

document.getElementById("main-heading")

// Dom

let heading = document.getElementById("heading1");
console.log(heading);

let element = document.getElementById("nonexisting")
console.log(element);

// Selecting by classname

let oldimages = document.getElementsByClassName("oldImg")
console.log(oldimages)

// Access individual element
console.log(oldimages[0])
console.log(oldimages[1])
console.log(oldimages[2])

// Loop through images

let oldImages = document.getElementsByClassName("oldImg");
for(let i = 0 ; i< oldImages.length; i++){
    console.log(oldImages[i])
}

// Select box links

let boxLinks = document.getElementsByClassName("boxLink")
console.log(boxLinks);

// Selecting by tagname

let paragraphs = document.getElementsByTagName("p")
console.log(paragraphs);

// Selecting all links

let links = document.getElementsByTagName("a")
console.log(links);

// total number
console.log(links.length);

// Query Selector - Modern way

// select id

let heading1 = document.querySelector("#heading1")
console.log(heading1);

// selct by class (first match only)

let firstOldImage = document.querySelector(".oldImg")
console.log(firstOldImage);

// Select all element with query selector all

let allOldImages = document.querySelectorAll(".oldImg")
console.log(allOldImages);


// Select by tag

let firstParagraph = document.querySelector("p")
console.log(firstParagraph);

//Complex Selectors (Links Inside a Specific Div)

let boxLink = document.querySelector(".box a")
console.log(boxLink);
