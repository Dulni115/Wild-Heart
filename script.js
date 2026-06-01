const hero = document.querySelector(".hero");

// Ensure your file paths and casing match your project directory precisely
const images = [
    "images/1.jpg.jpeg",
    "images/02.jpg.jpeg",
    "images/03.jpg.jpeg",
    "images/04.jpg.jpeg",
    "images/05.jpg.jpeg"
];

let current = 0;

function changeSlide() {
    // FIXED: Used proper template literals using backticks ``
    hero.style.backgroundImage = `url('${images[current]}')`;

    current++;

    if (current >= images.length) {
        current = 0;
    }
}

// Run immediately on page load
changeSlide();

// Runs every 3.5 seconds for a natural, smooth presentation pace
setInterval(changeSlide, 3500);
