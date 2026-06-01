const hero = document.querySelector(".hero");


const images = [
    "images/1.jpg.jpeg",
    "images/02.jpg.jpeg",
    "images/03.jpg.jpeg",
    "images/04.jpg.jpeg",
    "images/05.jpg.jpeg"
];

let current = 0;

function changeSlide() {
   
    hero.style.backgroundImage = `url('${images[current]}')`;

    current++;

    if (current >= images.length) {
        current = 0;
    }
}

changeSlide();

setInterval(changeSlide, 3500);
