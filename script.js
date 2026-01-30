// ================= NAMA TAMU =================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");
const namaEl = document.getElementById("namaTamu");

if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// ================= FADE-IN STAGGER =================

window.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 300);
  });
});
