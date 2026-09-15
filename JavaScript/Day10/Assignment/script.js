/* Part 1: Selecting Elements by ID
Q1. Select and Log the Main Heading
Select the element with id mainHeading and log it to the console. 
*/

let mainHeading = document.getElementById("mainHeading");
console.log(mainHeading);

/* Q2. Select and Log the Intro Paragraph
Select the paragraph with id intro and log it to the console. 
 */

let intro = document.getElementById("intro");
console.log(intro);

/* Q3. Select the Skills List 
Select the unordered list with id skillsList and store it in a variable called skills . Log it to verify.*/

// let skills = document.getElementById("skillsList")
// console.log(skills);

/* Q4. Select the Gallery Div
Select the div with id gallery and store it in a variable. Log the variable. */

// let galleryDiv = document.getElementById("gallery");
// console.log(galleryDiv);

/* Q5. Select the Footer
Select the footer element with id pageFooter and log it to the console. */

let footer = document.getElementById("pageFooter");
console.log(footer);

/* Part 2: Selecting Elements by Class Name
Q1. Select All Description Paragraphs
Select all elements with class description and log the HTMLCollection. Also log the length of the collection. */

let description = document.getElementsByClassName("description");
console.log(description);

console.log(description.length);

/* Q2. Select All Skill List Items
Select all elements with class skill and log how many skills are in the list. */

let skills_ = document.getElementsByClassName("skill");
console.log(skills_);

console.log(skills_.length);

/* Q3. Select All Project Images
Select all images with class project and log the collection. */

let projectImages = document.getElementsByClassName("project");
console.log(projectImages);

/* Q4. Access Individual Elements
Select all elements with class description . Log the first element and the second element separately using bracket notation. */

let descriptions = document.getElementsByClassName("description");
console.log(description[0]);
console.log(description[1]);

// Q5. Loop Through Skills
// Select all elements with class skill . Write a loop to log each skill item one by one.

let allSkills = document.getElementsByClassName("skill");
for (let i = 0; i < allSkills.length; i++) {
  console.log(allSkills[i]);
}

/* Part 3: Selecting Elements by Tag Name
Q1. Select All Paragraphs
Select all <p> tags on the page and log how many paragraphs exist. */

let paras = document.getElementsByTagName("p");
console.log(paras);
console.log(paras.length);

// Q2. Select All Headings
// Select all <h2> tags and log the collection.

let Headings = document.getElementsByTagName("h2");
console.log(Headings);

// Q3. Select All Links
// Select all <a> tags and log how many links are on the page.

let allLinks = document.getElementsByTagName("a");
console.log(allLinks.length);

// Q4. Select All Images
// Select all <img> tags and log the collection.

let allImages = document.getElementsByTagName("img");
console.log(allImages);

// Q5. Access First Paragraph
// Select all paragraphs using getElementsByTagName and log only the first paragraph element.

let allParas = document.getElementsByTagName("p");
console.log(allParas[0]);

/* Part 4: Using querySelector
Q1. Select Main Heading with querySelector
Use querySelector to select the element with id mainHeading . Log the result. */

let main_heading = document.querySelector("#mainHeading");
console.log(main_heading);

// Q2. Select First Description Paragraph
// Use querySelector to select the first element with class description . Log it.

let firstPara = document.querySelector(".description");
console.log(firstPara);

// Q3. Select First Skill
// Use querySelector to select the first <li> element with class skill . Log it.

let firstListSkill = document.querySelector("li.skill");
console.log(firstListSkill);

// Q4. Select First Link in Footer
// Use querySelector to select the first <a> tag inside the footer. Log it.

let firstFooterLink = document.querySelector("footer a");
console.log(firstFooterLink);

// Q5. Select Gallery Div
// Use querySelector with an id selector to select the div with id gallery . Log it.

let gallery_div = document.querySelector("div#gallery");
console.log(gallery_div);

/* Part 5: Using querySelectorAll
Q1. Select All Description Paragraphs
Use querySelectorAll to select all elements with class description . Log the NodeList and its length. */



