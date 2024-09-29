document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});

let clicks = 0;
const display = document.getElementById('display')
const button = document.getElementById("button");

button.addEventListener('click', () => {
    clicks++;
    display.textContent = clicks;
    
    
});