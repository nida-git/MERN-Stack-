let btn = document.createElement("button");
btn.innerText = "CLick me";

let count = 0;

let para = document.createElement("p");
para.innerText = `count is ${count}`;

let heading = document.querySelector("#heading");
heading.insertAdjacentElement("afterend", btn);

heading.insertAdjacentElement("afterend", para);

btn.addEventListener("click", () => {
  count++;
  para.innerText = `count is ${count}`;
});

let lightBox = document.querySelector(".light-box");
let redBtn = document.querySelector("#redBtn");
let yellowBtn = document.querySelector("#yellowBtn");
let greenBtn = document.querySelector("#greenBtn");

redBtn.addEventListener("click", () => {
  lightBox.style.backgroundColor = "red";
});
yellowBtn.addEventListener("click", () => {
  lightBox.style.backgroundColor = "yellow";
});
greenBtn.addEventListener("click", () => {
  lightBox.style.backgroundColor = "green";
});

let card = document.querySelector(".card");
let h2 = document.querySelector("h2");
card.addEventListener("mouseenter", () => {
  card.style.backgroundColor = "lightblue";
  h2.style.fontSize = "30px";
  card.style.border = "3px solid blue";
  console.log("Mouse enterd");
});

card.addEventListener("mouseleave", () => {
  card.style.backgroundColor = "lightblue";
  h2.style.fontSize = "20px";
  card.style.border = "1px solid grey";
  console.log("mouse left");
});

let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para3 = document.querySelector("#para3");

isHighlight = false;

function hightlight(para,num){

    para.addEventListener("dblclick", () => {
      if (isHighlight == false) {
        isHighlight = true;
        para.style.backgroundColor = "yellow";
        para.style.fontWeight = "bold";
        console.log(`para number ${num} was clicked` );
      } else if (isHighlight == true) {
        isHighlight = false;
        para.style.backgroundColor = "white";
        para.style.fontWeight = "normal";
      }
    });
}
hightlight(para1,1)
hightlight(para2,2)
hightlight(para3,3)

let movingBox = document.querySelector("#movingBox")


document.addEventListener("keydown", (event)=>{
    console.log(event.code);
    if (event.code == "ArrowUp"){
            // movingBox.style.top = parseInt(movingBox.style.top) + 10 + "px"
            console.log(movingBox);
    }
})