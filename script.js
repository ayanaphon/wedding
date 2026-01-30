// ================= NAMA TAMU UNIVERSAL =================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu") || "Tamu Undangan";

// Isi semua elemen dengan class .namaTamu
document.querySelectorAll(".namaTamu").forEach(el => {
  el.textContent = decodeURIComponent(tamu);
});

// ================= OPEN INVITATION =================

const openBtn = document.querySelector(".open-btn");
const homeSection = document.getElementById("homeSection");
const salamSection = document.getElementById("salamSection");
const card = document.getElementById("coverCard");
const bottomNav = document.getElementById("bottomNav");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    card.style.opacity = "0";

    setTimeout(() => {
      card.style.display = "none";
      homeSection.classList.add("show");
      bottomNav.classList.add("show");
    }, 600);
  });
}

// ================= NAVIGATION =================

const navItems = document.querySelectorAll(".nav-item");

navItems[0].addEventListener("click", () => {
  salamSection.classList.remove("show");
  homeSection.classList.add("show");

  navItems.forEach(item => item.classList.remove("active"));
  navItems[0].classList.add("active");
});

navItems[1].addEventListener("click", () => {
  homeSection.classList.remove("show");
  salamSection.classList.add("show");

  navItems.forEach(item => item.classList.remove("active"));
  navItems[1].classList.add("active");
});
