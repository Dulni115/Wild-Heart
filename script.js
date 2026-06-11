// Target Layer references
const animalHandLayer = document.querySelector(".animal-hand-layer");
const adoptNowTrigger = document.getElementById("adopt-now-trigger");
const championChooseTrigger = document.getElementById("champion-choose-trigger");

const viewHome = document.getElementById("view-home");
const viewTiers = document.getElementById("view-tiers");
const viewPricing = document.getElementById("view-pricing");

// Isolated Asset Carousel Arrays (Only containing left hands matching your file structure)
const animalHandImages = [
    "./images/WEB Sloth Bear Hand.png",
    "./images/WEB Elephant Hand.png",
    "./images/WEB Leo Hand.png",
    "./images/WEB Monkey Hand.png",
    "./images/WEB turtle Hand.png"
];

let currentIndex = 0;

// Updates the animal image target element
function cycleAnimalHands() {
    animalHandLayer.style.backgroundImage = `url('${animalHandImages[currentIndex]}')`;
    
    currentIndex++;
    if (currentIndex >= animalHandImages.length) {
        currentIndex = 0;
    }
}

// Kickoff Background Layer Loop Engine
cycleAnimalHands();
setInterval(cycleAnimalHands, 3000);

// SPA View State Routing Engine Actions
adoptNowTrigger.addEventListener("click", () => {
    viewHome.classList.remove("active");
    viewTiers.classList.add("active");
});

championChooseTrigger.addEventListener("click", () => {
    viewTiers.classList.remove("active");
    viewPricing.classList.add("active");
});
