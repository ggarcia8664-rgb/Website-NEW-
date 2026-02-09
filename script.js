const startBtn = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const nextPage = document.getElementById("next-page");

startBtn.addEventListener("click", () => {
  startPage.classList.remove("active");
  nextPage.classList.add("active");
});
