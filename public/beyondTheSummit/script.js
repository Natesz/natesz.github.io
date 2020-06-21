const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

const data = [
    {
        "name": "FGC",
        "from": "2020-03-10",
        "to": "2020-03-12",
        "color": "#00d487",
        "talent": ["LD"]
    },
    {
        "name": "Rocket League Showdown 2020 Summer Shuffle",
        "from": "2020-06-29",
        "to": "2020-07-12",
        "color": "#e5043b",
        "talent": ["EterNaLeNvy", "DakotaCox", "Sarah Jessica Parker"]
    },
    {
        "name": "Dota Summit",
        "from": "2020-11-02",
        "to": "2020-11-07",
        "color": "#ca6412",
        "talent": ["HMW", "Phil"]
    }
]

const button = document.querySelector(".btn");

const content = document.querySelector(".content-box");
const header = document.querySelector(".content-box-head");
const midSection = document.querySelector(".content-box-mid p");
const talentSectionreturn = document.querySelector(".content-box-end");

let currentOverlayNum = 1;

const handleClick = () => {
    content.style.display = "block";

    let randomOverlayNum = Math.floor(Math.random() * 3);
    while(currentOverlayNum === randomOverlayNum){
        randomOverlayNum = Math.floor(Math.random() * 3);
    } 

    currentOverlayNum = randomOverlayNum;

const fromMonth = months[data[randomOverlayNum].from.slice(5,7)-1];
const toMonth = months[data[randomOverlayNum].to.slice(5,7)-1];
const fromDay = data[randomOverlayNum].from.slice(8,10);
const toDay = data[randomOverlayNum].to.slice(8,10);

const date = `${fromMonth} ${fromDay} - ${toMonth} ${toDay}`;
const headerText = `<p>${data[randomOverlayNum].name.toUpperCase()}</p>`;

header.innerHTML = headerText;
header.style.backgroundColor = data[randomOverlayNum].color;

midSection.innerHTML = date;

let result = "";

data[randomOverlayNum].talent.forEach(tal => {
    result += `
        <div>
            <p>${tal}</p>
        </div>`
    });

talentSectionreturn.innerHTML = result;

const talentSection = document.querySelectorAll(".content-box-end div"); 
talentSection.forEach(talent => talent.style.backgroundColor = data[randomOverlayNum].color);

}
button.addEventListener("click", handleClick);
