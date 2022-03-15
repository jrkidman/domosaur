// select span with class "mess-with-me"
// change font size to 40
// event listener, when clicked, font changes to orange
let spanMessWithMe = document.querySelector("span.mess-with-me");
spanMessWithMe.style.fontSize = "40px";


// select paragraph with class "mess-with-me"
// change background color to green
let paragraphMessWithMe = document.querySelector("p.mess-with-me");
paragraphMessWithMe.style.backgroundColor = "green";


// select second dinosaur
// hide image so it's no longer visible, and area below it moves to take up space
let secondDinosaur = document.querySelector("#hide-me");
secondDinosaur.style.display = "none";


// select first dinosaur
// change size to be 324px wide
// event listener, when clicked, get a red border
let firstDinosaur = document.querySelector("#triceratops");
firstDinosaur.style.width = "324px";

firstDinosaur.addEventListener("click", function () {
    firstDinosaur.style.border = "5px red solid";
})



// select feathered dinosaur
// event listener, when clicked, becomes 50% transparent
let featheredDinosaur = document.querySelector("#feathers");
featheredDinosaur.addEventListener("click", function () {
    featheredDinosaur.style.opacity = "0.5";
})



// select "switch background color" button
// event listener, when clicked, change background color to any color
// stretch goal, switches back and forth from white to toggled color
let switchColorButton = document.querySelector("#toggle");
let dinoRow = document.querySelector("#row");
dinoRow.style.backgroundColor = "white";


function changeBackgroundToBlack() {
    if (dinoRow.style.backgroundColor === "white"){
        dinoRow.style.backgroundColor = "black";
    }
    else {
        dinoRow.style.backgroundColor = "white";
    }
}
switchColorButton.addEventListener("click", changeBackgroundToBlack);




// let toggled = false;

// let toggleBackgroundColor = function(){
//     if (toggled === false){
//         dinoRow.style.backgroundColor = "black";
//         toggled = true;
//     }
//     else {
//         dinoRow.style.backgroundColor = "white";
//         toggled = false;
//     }
// }
// switchColorButton.addEventListener("click", toggleBackgroundColor);




// select dinosaur with ID "biggify"
// event listener, when hovered, grows image to 200px wide
// undo it for stretch goal
let bigDino = document.querySelector("#biggify");
bigDino.addEventListener("mouseover", function () {
    bigDino.style.width = "200px";
})
bigDino.addEventListener("mouseleave", function () {
    bigDino.style.width = "162px";
})