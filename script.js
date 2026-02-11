const startBtn = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const nextPage = document.getElementById("next-page");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", () => {
  startPage.classList.remove("active");
  nextPage.classList.add("active");
});

resetBtn.addEventListener("click", () => {
  nextPage.classList.remove("active");
  startPage.classList.add("active");
});

const yesRed = document.getElementById("yes-red");
const yesBlue = document.getElementById("yes-blue");
const noBtn = document.getElementById("no-btn");
const outfitPage = document.getElementById("outfit-page");
const backToValBtn = document.getElementById("back-to-val-btn");

function goToOutfitPage() {
  nextPage.classList.remove("active");
  outfitPage.classList.add("active");
}

yesRed.addEventListener("click", () => {
  goToOutfitPage();
});

yesBlue.addEventListener("click", () => {
  goToOutfitPage();
});

backToValBtn.addEventListener("click", () => {
  outfitPage.classList.remove("active");
  nextPage.classList.add("active");
});

noBtn.addEventListener("mouseenter", () => {
  // make the "no" button run away (fun effect)
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

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
  heart.style.backgroundImage = `url('${heartImages[Math.floor(Math.random() * heartImages.length)]}')`;

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 600);
