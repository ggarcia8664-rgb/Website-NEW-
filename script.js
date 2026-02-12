// ===== PAGE ELEMENTS =====
const welcomePage = document.getElementById("welcome-page");
const continueBox = document.getElementById("continue-box");
const startBtn = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const balloonPage = document.getElementById("balloon-page");
const nextPage = document.getElementById("next-page");
const outfitPage = document.getElementById("outfit-page");

const resetBtn = document.getElementById("reset-btn");
const backToValBtn = document.getElementById("back-to-val-btn");

const yesRed = document.getElementById("yes-red");
const yesBlue = document.getElementById("yes-blue");
const noBtn = document.getElementById("no-btn");

const balloonBtn = document.getElementById("balloon-btn");
const balloonText = document.getElementById("balloon-text");


// ===== CONTINUE BOX → GO TO START PAGE =====
continueBox.addEventListener("click", () => {
  welcomePage.classList.remove("active");
  startPage.classList.add("active");
});


// ===== START BUTTON → GO TO BALLOON PAGE =====
startBtn.addEventListener("click", () => {
  startPage.classList.remove("active");
  balloonPage.classList.add("active");
});


// ===== BALLOON LOGIC =====
let balloonClicks = 0;

const balloonStages = [
  { scale: 1.0, text: "What?" },
  { scale: 1.15, text: "Hmmmm" },
  { scale: 1.32, text: "im confused?" },
  { scale: 1.5, text: "ok." },
  { scale: 1.75, text: "Im ready!!!!!!!" }
];

balloonBtn.addEventListener("click", () => {
  if (balloonClicks < 5) balloonClicks++;

  const stage = balloonStages[balloonClicks - 1];
  balloonBtn.style.transform = `scale(${stage.scale})`;
  balloonText.textContent = stage.text;

  if (balloonClicks === 5) {
    // Add shake animation
    balloonBtn.classList.add("shake");
    
    setTimeout(() => {
      balloonPage.classList.remove("active");
      nextPage.classList.add("active");
      
      // Create heart confetti
      createHeartConfetti();
      
      // Remove shake class for next time
      balloonBtn.classList.remove("shake");
    }, 700);
  }
});


// ===== YES BUTTONS → OUTFIT PAGE =====
function goToOutfitPage() {
  nextPage.classList.remove("active");
  outfitPage.classList.add("active");
}

yesRed.addEventListener("click", goToOutfitPage);
yesBlue.addEventListener("click", goToOutfitPage);


// ===== BACK BUTTON (OUTFIT → VALENTINE PAGE) =====
backToValBtn.addEventListener("click", () => {
  outfitPage.classList.remove("active");
  nextPage.classList.add("active");
});


// ===== RESET BUTTON (GO BACK TO START) =====
resetBtn.addEventListener("click", () => {
  nextPage.classList.remove("active");
  outfitPage.classList.remove("active");
  balloonPage.classList.remove("active");
  welcomePage.classList.add("active");

  // Reset balloon state
  balloonClicks = 0;
  balloonBtn.style.transform = "scale(1)";
  balloonText.textContent = "Click me";
});


// ===== NO BUTTON RUN AWAY EFFECT =====
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


// ===== FLOATING HEARTS BACKGROUND =====
const heartImages = [
  "Imgs/heart 1.png",
  "Imgs/heart 2.png"
];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const size = Math.random() * 10 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 8 + "s";
  heart.style.backgroundImage =
    `url('${heartImages[Math.floor(Math.random() * heartImages.length)]}')`;

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 600);


// ===== HEART CONFETTI =====
function createHeartConfetti() {
  const container = document.querySelector(".confetti-container");
  const heartCount = 25; // number of hearts to drop

  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "heart-confetti";

      // Random size
      const size = Math.random() * 15 + 15;
      confetti.style.width = size + "px";
      confetti.style.height = size + "px";

      // Random horizontal position
      confetti.style.left = Math.random() * 100 + "vw";

      // Random animation duration (fall speed)
      confetti.style.animationDuration = Math.random() * 2 + 2.5 + "s";

      // Random delay for staggered effect
      confetti.style.animationDelay = Math.random() * 0.5 + "s";

      // Use one of the heart images
      confetti.style.backgroundImage = 
        `url('${heartImages[Math.floor(Math.random() * heartImages.length)]}')`;

      container.appendChild(confetti);

      // Remove after animation completes
      setTimeout(() => confetti.remove(), 4000);
    }, i * 50); // stagger creation slightly
  }
}
