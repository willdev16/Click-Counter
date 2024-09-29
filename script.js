document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});

let clicks = localStorage.getItem('clicks') ? parseInt(localStorage.getItem('clicks')) : clicks;
const display = document.getElementById('display')
const button = document.getElementById("button");

button.addEventListener('click', () => {
    clicks++;
    display.textContent = clicks;
    

    localStorage.setItem('clicks', clicks);
});