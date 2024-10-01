document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});

let clicks = 0;
let nextGoal = 500;
const display = document.getElementById('display')
const button = document.getElementById("button");
const goal = document.getElementById("goal");

goal.textContent = nextGoal;



button.addEventListener('click', () => {
    clicks++;
    display.textContent = clicks;
    
    if(clicks == nextGoal){
        nextGoal = nextGoal + 500;
    }

    goal.textContent = nextGoal;

    
});