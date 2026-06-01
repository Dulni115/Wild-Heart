const hero = document.querySelector(".hero");

// GitHub Pages වල පින්තූර හරියටම load වෙන්න './images/' ලෙස වෙනස් කලා
const images = [
    "./images/1.jpg.jpeg",
    "./images/02.jpg.jpeg",
    "./images/03.jpg.jpeg",
    "./images/04.jpg.jpeg",
    "./images/05.jpg.jpeg"
];

let current = 0;

function changeSlide() {
    hero.style.backgroundImage = `url('${images[current]}')`;

    current++;

    if (current >= images.length) {
        current = 0;
    }
}

// මුලින්ම පලවෙනි photo එක පෙන්වීමට
changeSlide();

// තත්පර 3කට වරක් ස්ලයිඩ් වීම
setInterval(changeSlide, 3000);
