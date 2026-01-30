const openBtn = document.querySelector(".open-btn");
const homeSection = document.getElementById("homeSection");
const card = document.getElementById("coverCard");
const bottomNav = document.getElementById("bottomNav");

openBtn.addEventListener("click", () => {
  card.style.opacity = "0";

  setTimeout(() => {
    card.style.display = "none";
    homeSection.classList.add("show");
    bottomNav.classList.add("show");
  }, 600);
});
