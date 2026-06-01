const hero = document.querySelector(".hero");

// Images folder එකේ නම් නිවැරදිව මෙලෙසම තිබිය යුතුය.
const images = [
    "images/1.jpg.jpeg",
    "images/02.jpg.jpeg",
    "images/03.jpg.jpeg",
    "images/04.jpg.jpeg",
    "images/05.jpg.jpeg"
];

let current = 0;

function changeSlide() {
    // බැක්ටික් (``) භාවිතා කර ඇති නිසා code එක හරියටම ක්‍රියා කරයි
    hero.style.backgroundImage = `url('${images[current]}')`;

    current++;

    if (current >= images.length) {
        current = 0;
    }
}

// මුලින්ම පලවෙනි photo එක load වීමට
changeSlide();

// සෑම තත්පර 3.5 කට වරක් පසුබිම් පින්තූරය මාරු වේ
setInterval(changeSlide, 3500);
