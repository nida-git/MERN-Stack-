// Dom events 

// let btn = document.querySelector("button")
// btn.addEventListener("click", ()=>{
//     console.log("Button is clicked");
// })

// Multiple listners on same element 

let btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    console.log("First Action");

})

btn.addEventListener("click", ()=>{
    console.log("second action");
})

// paragraph click counter

let count = 0
let paragraph = document.querySelector("#para")
paragraph.addEventListener("click", ()=> {
    count++
    paragraph.innerText = `You clicked me ${count} times`
})

// Mouse and pointer events

let box = document.querySelector(".box")

box.addEventListener("click", ()=>{
    box.style.backgroundColor = "black"
})

// box.addEventListener("mouseenter", ()=>{
//     box.style.backgroundColor = "black"
// })

// box.addEventListener("mouseleave", ()=>{
//     box.style.backgroundColor = "black"
// })

// box.addEventListener("dblclick", ()=>{
//     box.style.backgroundColor = "black"
// })

let toggleBtn = document.querySelector("#toggle-btn")
let content = document.querySelector("#content")
toggleBtn.innerText = "Hide"

toggleBtn.addEventListener("click",()=>{
    if(content.style.display === "none"){
        content.style.display = "block" ;
        toggleBtn.innerText = "Hide"
    }else {
        content.style.display = "none"
        toggleBtn.innerText = "Show"
        console.log("hello");
        console.log(content.style.display === "none");
    }
})

// dbl click to edit

let heading = document.querySelector("#heading")
heading.addEventListener("dblclick", ()=>{
    heading.innerText = "you double clicked me"
    heading.style.color = "gold"
})

// Interactive card hover

let card = document.querySelector(".card")
card.addEventListener("mouseenter",()=> {
    card.style.transform = "scale(1.1)"
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0,5)";

})

card.addEventListener("mouseleave", ()=>{
    card.style.transform = "scale(1)"
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0,1) "
})

// This keyword

let h2 = document.querySelector("#h2")
let h3 = document.querySelector("#h3")
let para = document.querySelector("#p")

function changeColor (){
    this.style.backgroundColor = "yellow"

}

h2.addEventListener("click", changeColor)
h3.addEventListener("click", changeColor)
para.addEventListener("click", changeColor)

// Toggle class on click

let boxes = document.querySelectorAll(".boxes")
function toggleActive(){
    this.classList.toggle("active")
}

for(let box of boxes){
    box.addEventListener("click", toggleActive)
}

// delete buttons

let deleteBtn = document.querySelectorAll(".delete-btn")

function removeItem(){
    this.parentElement.remove()
    console.log("Item deleted");
}

for(let btn of deleteBtn){

    btn.addEventListener("click", removeItem)
}

// Highlight on hover

