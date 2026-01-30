/* =====================================================
   NAMA TAMU UNIVERSAL (URL + LOCAL STORAGE STABLE)
===================================================== */

const params = new URLSearchParams(window.location.search);
let tamu = params.get("tamu");

// Jika ada parameter → simpan ke localStorage
if (tamu) {
  localStorage.setItem("namaTamu", tamu);
} else {
  // Jika tidak ada → ambil dari localStorage
  tamu = localStorage.getItem("namaTamu");
}

// Default jika tetap kosong
tamu = tamu || "Tamu Undangan";

// Isi semua elemen dengan class .namaTamu
document.querySelectorAll(".namaTamu").forEach(el => {
  el.textContent = decodeURIComponent(tamu);
});


/* =====================================================
   OPEN INVITATION TRANSITION
===================================================== */

const openBtn = document.querySelector(".open-btn");
const homeSection = document.getElementById("homeSection");
const salamSection = document.getElementById("salamSection");
const coverCard = document.getElementById("coverCard");
const bottomNav = document.getElementById("bottomNav");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    coverCard.style.opacity = "0";

    setTimeout(() => {
      coverCard.style.display = "none";
      homeSection.classList.add("show");
      bottomNav.classList.add("show");
    }, 600);
  });
}


/* =====================================================
   BOTTOM NAVIGATION SYSTEM
===================================================== */

const navItems = document.querySelectorAll(".nav-item");

// Fungsi reset active
function setActive(index) {
  navItems.forEach(item => item.classList.remove("active"));
  navItems[index].classList.add("active");
}

// Opening / Home
if (navItems[0]) {
  navItems[0].addEventListener("click", () => {
    if (salamSection) salamSection.classList.remove("show");
    if (homeSection) homeSection.classList.add("show");
    setActive(0);
  });
}

// Salam
if (navItems[1]) {
  navItems[1].addEventListener("click", () => {
    if (homeSection) homeSection.classList.remove("show");
    if (salamSection) salamSection.classList.add("show");
    setActive(1);
  });
}


/* =====================================================
   OPTIONAL: SMOOTH FADE ANIMATION ON LOAD
===================================================== */

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index
