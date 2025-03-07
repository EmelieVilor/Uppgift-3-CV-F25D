//dark-light-mode 
let lightmode = document.querySelector('.lightmode')
const modeBtn = document.querySelector('.modeBtn')

modeBtn.addEventListener("click", themeSwitch);

function themeSwitch() {
    localStorage.setItem("lightmode", true);
    document.body.classList.toggle('lightmode');
    console.log('You have clicked the button!');
}


//Json CV

function education() {
    fetch("/education.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById("edTitle").innerText = data.title;

            // Hitta listan i HTML
            let itemList = document.getElementById("edFilelist");
            itemList.innerHTML = "";

            data.items.forEach(function(item) {
                let li = document.createElement("li"); 
                li.textContent = `${item.school} | ${item.program} | ${item.duration} \n\n${item.description}`;
                itemList.appendChild(li);
                console.log(li.textContent);
            });
        })
        .catch(function(error) {
            console.error("Fel vid hämtning av JSON:", error);
        });
}

education();


function experience() {
    fetch("/experience.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById("exTitle").innerText = data.title;

            // Hitta listan i HTML
            let itemList = document.getElementById("exFilelist");
            itemList.innerHTML = "";

            data.items.forEach(function(item) {
                let li = document.createElement("li"); 
                li.textContent = `${item.company} | ${item.title} | ${item.duration} \n\n${item.description}`;
                itemList.appendChild(li);
            });
        })
        .catch(function(error) {
            console.error("Fel vid hämtning av JSON:", error);
        });
}

console.log(experience);
experience();

//date in footer

let date = new Date().toLocaleDateString("sv-SE");
console.log(date);
document.getElementById("date").innerHTML = `${date} &copy Emelie Nilsson Vilör`;


