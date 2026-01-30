document.addEventListener("DOMContentLoaded", function () {

  /* ================= NAMA TAMU ================= */

  const params = new URLSearchParams(window.location.search);
  let tamu = params.get("tamu");

  if (tamu) {
    localStorage.setItem("namaTamu", tamu);
  } else {
    tamu = localStorage.getItem("namaTamu");
  }

  tamu = tamu || "Tamu Undangan";

  const namaElements = document.querySelectorAll(".namaTamu");
  namaElements.forEach(el => {
    el.textContent = decodeURIComponent(tamu);
  });


  /* ================= ELEMENT SAFE CHECK ================= */

  const openBtn = document.querySelector(".open-btn");
  const homeSection = document.getElementById("homeSection");
  const salamSection = document.getElementById("salamSection");
  const coverCard = document.getElementById("coverCard");
  const bottomNav = document.getElementById("bottomNav");
  const navItems = document.querySelectorAll(".nav-item");


  /* ================= OPEN INVITATION ================= */

  if (openBtn && coverCard && homeSection && bottomNav) {
    openBtn.addEventListener("click", function () {
      coverCard.style.opacity = "0";

      setTimeout(function () {
        coverCard.style.display = "none";
        homeSection.classList.add("show");
        bottomNav.classList.add("show");
      }, 600);
    });
  }


  /* ================= NAVIGATION ================= */

  function setActive(index) {
    navItems.forEach(item => item.classList.remove("active"));
    if (navItems[index]) {
      navItems[index].classList.add("active");
    }
  }

  if (navItems.length > 1) {

    // Opening/Home
    navItems[0].addEventListener("click", function () {
      if (salamSection) salamSection.classList.remove("show");
      if (homeSection) homeSection.classList.add("show");
      setActive(0);
    });

    // Salam
    navItems[1].addEventListener("click", function () {
      if (homeSection) homeSection.classList.remove("show");
      if (salamSection) salamSection.classList.add("show");
      setActive(1);
    });

  }

});
