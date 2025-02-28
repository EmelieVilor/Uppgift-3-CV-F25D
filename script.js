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




// Modals
const modal = document.getElementById("Modal1");
const btn = document.getElementById("modalBtn1");
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//test

// const modeBtn = document.querySelector(".modeBtn");
// let lightmode = localStorage.getItem(".lightmode");

// const enableLightMode = () => {
//     document.body.classList.add("lightmode");
//     // toggleBtn.classList.remove("dark-mode-toggle");
//     localStorage.setItem("lightmode", "enabled");
// };

// const disableLightMode = () => {
//     document.body.classList.remove("lightmode");
// //   toggleBtn.classList.add("dark-mode-toggle");
//     localStorage.setItem("lightmode", null);
// };

// if (lightmode === "enabled") {
//   enableLightMode(); // set state of lightmode on page load
// }

// modeBtn.addEventListener("click", (e) => {
//   lightmode = localStorage.getItem("lightmode"); // update lightmode when clicked
//     if (lightmode === "disabled") {
//     enableLightMode();
//     } else {
//     disableLightMode();
//     }
// });




// Funktion för att hämta och visa JSON-data
function fetchEducation() {
    // Använd fetch() för att hämta JSON-filen
    fetch("educationdata.json")
        .then(function (response) {
            // Konvertera JSON-texten till ett JavaScript-objekt
            return response.json();
        })
        .then(function (data) {
            // Uppdatera HTML med data från JSON
            document.getElementById("#title").innerText = data.title;
            document.getElementById("#description").innerText = data.description;

            // Hitta listan i HTML
            let itemList = document.getElementById("#filelist");
            itemList.innerHTML = ""; // Rensa listan först


            // Loopa igenom JSON-listan och skapa ett HTML-element för varje objekt
            data.items.forEach(function (item) {
                let li = document.createElement("li"); // Skapa ett nytt <li>-element
                li.textContent = item.program + " - " + item.school + " - " + item.year; // Sätt textinnehåll
                itemList.appendChild(li); // Lägg till i listan
            });
        })
        .catch(function (error) {
            console.error("Fel vid hämtning av JSON:", error);
        });
}

// Kör funktionen när sidan laddas
fetchEducation();


// Funktion för att hämta och visa JSON-data
function fetchExperience() {
    // Använd fetch() för att hämta JSON-filen
    fetch("experiencedata.json")
        .then(function (response) {
            // Konvertera JSON-texten till ett JavaScript-objekt
            return response.json();
        })
        .then(function (data) {
            // Uppdatera HTML med data från JSON
            document.getElementById("#title2").innerText = data.title;
            document.getElementById("#description2").innerText = data.description;

            // Hitta listan i HTML
            let itemList = document.getElementById("#filelist2");
            itemList.innerHTML = ""; // Rensa listan först


            // Loopa igenom JSON-listan och skapa ett HTML-element för varje objekt
            data.items.forEach(function (item) {
                let li = document.createElement("li"); // Skapa ett nytt <li>-element
                li.textContent = item.company + " - " + item.role + " - " + item.year; // Sätt textinnehåll
                itemList.appendChild(li); // Lägg till i listan
            });
        })
        .catch(function (error) {
            console.error("Fel vid hämtning av JSON:", error);
        });
}

// Kör funktionen när sidan laddas
fetchExperience();


// function fetchData() {
//     // Använd fetch() för att hämta JSON-filen
//     fetch("experiencedata.json")
//         .then(function(response) {
//             // Konvertera JSON-texten till ett JavaScript-objekt
//             return response.json();
//         })
//         .then(function(data) {
//             // Uppdatera HTML med data från JSON
//             document.getElementById("title2").innerText = data.title;
//             document.getElementById("description2").innerText = data.description;

//             // Hitta listan i HTML
//             var itemList = document.getElementById("filelist2");
//             itemList.innerHTML = ""; // Rensa listan först

//             // Loopa igenom JSON-listan och skapa ett HTML-element för varje objekt
//             data.items.forEach(function(item) {
//                 var li = document.createElement("li"); // Skapa ett nytt <li>-element
//                 li.textContent = item.company + " - " + item.title + " - " + item.year; // Sätt textinnehåll
//                 itemList.appendChild(li); // Lägg till i listan
//             });
//         })
//         .catch(function(error) {
//             console.error("Fel vid hämtning av JSON:", error);
//         });
// }

// // Kör funktionen när sidan laddas
// fetchData();