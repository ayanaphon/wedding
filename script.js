// ================= NAMA TAMU =================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");
const namaEl = document.getElementById("namaTamu");

if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
}

// ================= OPEN INVITATION =================

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
