// ================= NAMA TAMU =================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");
const namaEl = document.getElementById("namaTamu");

if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
}

// ================= FADE LOAD =================

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade").forEach(el => {
    setTimeout(() => {
      el.classList.add("show");
    }, 300);
  });
});

// ================= OPEN INVITATION =================

const openBtn = document.querySelector(".open-btn");
const homeSection = document.getElementById("homeSection");
const card = document.querySelector(".card");

openBtn.addEventListener("click", () => {
  card.style.opacity = "0";

  setTimeout(() => {
    card.style.display = "none";
    homeSection.classList.add("show");
  }, 600);
});
