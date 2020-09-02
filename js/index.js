// Your code goes here

// mouseover event type added to all h2 elements
const colorChange = document.querySelectorAll('h2');
for (let i = 0; i < colorChange.length; i++){
    colorChange[i].addEventListener("mouseover", function(event){
        event.target.style.color = "orange";
    })
}

//  mouseout event type
const bottomBtn = document.querySelectorAll(".btn");
for (let i = 0; i < bottomBtn.length; i++){
    bottomBtn[i].addEventListener("mouseout", function(event){
        event.target.style.color = "purple";
    })
}

// load event type added to the window
window.addEventListener("load", function(event){
    console.log("Welcome to Fun Bus!")
})

// mouseup event type
const btmDestination = document.querySelectorAll(".destination h4");
for(let i = 0; i < btmDestination.length; i++){
    btmDestination[i].addEventListener("mouseup", function(event){
        event.target.style.fontSize = "4em";
    })
}

// resize event type added
const topImg = document.querySelector(".intro img");
window.addEventListener("resize", function(event){
    topImg.style.display = "none";
})


// contextmenu event type added to header h1
const logoText = document.querySelector(".logo-heading");
logoText.addEventListener("contextmenu", function(event){
    event.target.style.color = "yellow";
})


// scroll event type added
const headerImg = document.querySelector(".intro img");
window.addEventListener("scroll", function(event){
    headerImg.style.transform = "rotate(0.5turn)";
})

// dblclick event type added
const middleImg = document.querySelectorAll(".img-content");
for (let i = 0; i < middleImg.length; i++){
    middleImg[i].addEventListener("dblclick", function(event){
        event.target.style.transform = "rotate(0.1turn)";
    })
}


// click event type added to nav
const navBar = document.querySelectorAll(".nav")
for (let i = 0; i < navBar.length; i++){
    navBar[i].addEventListener("click", function(event){
        event.target.style.fontSize = "2em";
        event.target.style.backgroundColor ="#ffcad4";
        event.target.style.color = "#1f38a4";
    })
}

// drag/drop event type added
const boatImg = document.querySelector(".content-destination img");
boatImg.addEventListener("drag", function(event){
    event.target.style.opacity = "30%";
})


// Nest two similar events somewhere in the site and prevent the event propagation properly.
const destinations = document.querySelectorAll(".destination");
destinations.forEach((element)=> {
    element.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "red";
    })
})



const content =document.querySelector(".content-pick")
const destination =destinations[0]
const header4 = document.querySelectorAll(".destination h4")[0];
const paragraph = document.querySelectorAll(".destination p")[0];

[content, destination, header4, paragraph].forEach((element) => {
    element.addEventListener("click", (event) =>{
        event.target.style.border = '1px solid black';
        event.stopPropagation();
    })
})

// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`
const allLinks = document.querySelectorAll(".nav-link");
allLinks.forEach(function(link){
    link.addEventListener("click", function (event){
        event.target.href = 'https://www.google.com';
        event.preventDefault();
    })
})


// stretch Greensock animation on signup buttons

bottomBtn.forEach(function(btn){
    btn.addEventListener("mouseenter", function (){
        TweenMax.to(btn, 1, { scaleY:0.6, height:"50vh" })
    })
})
