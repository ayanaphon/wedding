// ================= NAMA TAMU =================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");
const namaEl = document.getElementById("namaTamu");

if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// ================= UNLOCK =================

function openInvitation() {
  document.body.classList.remove("locked");
}
