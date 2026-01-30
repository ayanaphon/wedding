document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.querySelector(".open-btn");
  const coverCard = document.getElementById("coverCard");
  const salamSection = document.getElementById("salamSection");
  const bottomNav = document.getElementById("bottomNav");

  if (openBtn) {
    openBtn.addEventListener("click", function () {
      coverCard.style.display = "none";
      salamSection.classList.add("show");
      bottomNav.classList.add("show");
    });
  }

});
