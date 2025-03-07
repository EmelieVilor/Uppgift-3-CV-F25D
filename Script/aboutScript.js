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