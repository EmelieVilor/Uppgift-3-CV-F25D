const toggleBtn = document.querySelector(".menu-icon")
const navMenu = document.querySelector(".menu")

//lägger till en funktion på knappen toggleBtn
toggleBtn.addEventListener("click", hamburgerMenu)

//vad som händer när man trycker på toggleBtn
function hamburgerMenu() {
    navMenu.classList.toggle("show")
    toggleBtn.classList.toggle("fa-x")
}


//dark-light-mode 
let lightmode = document.querySelector('.lightmode')
const modeBtn = document.querySelector('.modeBtn')

modeBtn.addEventListener("click", themeSwitch);

function themeSwitch() {
    localStorage.setItem("lightmode", true);
    document.body.classList.toggle('lightmode');
    console.log('You have clicked the button!');
}

//date in footer

let date = new Date().toLocaleDateString("sv-SE");
console.log(date);
document.getElementById("date").innerHTML = `${date} &copy Emelie Nilsson Vilör`;


// Modals lånade och inspirerade av W3 Schools https://www.w3schools.com/howto/howto_css_modals.asp

const modal1 = document.getElementById("Modal1");
const modal2 = document.getElementById("Modal2");
const modal3 = document.getElementById("Modal3");
const modal4 = document.getElementById("Modal4");

const btn1 = document.getElementById("modalBtn1");
const btn2 = document.getElementById("modalBtn2");
const btn3 = document.getElementById("modalBtn3");
const btn4 = document.getElementById("modalBtn4");

const span1 = document.getElementsByClassName("close1")[0];
const span2 = document.getElementsByClassName("close2")[0];
const span3 = document.getElementsByClassName("close3")[0];
const span4 = document.getElementsByClassName("close4")[0];

//Open the modal 
btn1.onclick = function () {
    modal1.style.display = "block";
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

btn3.onclick = function () {
    modal3.style.display = "block";
}

btn4.onclick = function () {
    modal4.style.display = "block";
}

// Close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
span4.onclick = function () {
    modal4.style.display = "none";
}


