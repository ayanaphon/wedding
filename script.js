// ================= NAMA TAMU =================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");
const namaEl = document.getElementById("namaTamu");

if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// ================= BUKA UNDANGAN =================

function openInvitation() {
  document.body.classList.remove("locked");
}

// ================= PARALLAX RINGAN =================

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  const left = document.querySelector(".ornamen.left");
  const right = document.querySelector(".ornamen.right");

  if (left && right) {
    left.style.transform = `translateY(${scrolled * 0.12}px)`;
    right.style.transform = `translateY(${scrolled * 0.12}px)`;
  }
});
