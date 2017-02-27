// GO!

// TASK 1 -- Show/Hide Nav


document.getElementById("hide-nav").addEventListener("click", function (){

var navMenuEl = document.querySelector(".nav-menu")
var navMenuStyle = window.getComputedStyle(navMenuEl)
// console.log(navMenuStyle)
if(navMenuStyle.visibility === "visible"){
  navMenuEl.style.visibility = "hidden"
} else if(navMenuStyle.visibility === "hidden"){
  navMenuEl.style.visibility = "visible"
}



})


// TASK 2 -- Select an Icon

document.getElementById("select-items").addEventListener("click", function (evt){

var clickTarget = evt.target

if(clickTarget.classList.contains("selected")){
  clickTarget.classList.remove("selected")
}else if(clickTarget.classList.contains("option")){
  clickTarget.classList.add("selected")
}
})




// TASK 3 -- Move Item From List to List

document.querySelector(".add-points").addEventListener("click", function (evt){

var clickTarget = evt.target
var pointNumber = parseInt(clickTarget.textContent)
var totalPointsEl = document.querySelector(".total-points")
var startingTotal = parseInt(totalPointsEl.textContent)
totalPointsEl.textContent = startingTotal + pointNumber

// console.log(totalPointsEl.textContent )
// console.log("heyo")

})
// TASK 4 -- Add Guest to List

document.querySelector("#list-2-list").addEventListener("click", function (evt){
var clickTarget = evt.target
var goodStandingListEl = document.querySelector(".good-standing-list")
var probationListEl = document.querySelector(".probation-list")
if(clickTarget.parentNode.className === "good-standing-list"){
  probationListEl.append(clickTarget)
} else if( clickTarget.parentNode.className ==="probation-list"){
  goodStandingListEl.append(clickTarget)
}

})


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
