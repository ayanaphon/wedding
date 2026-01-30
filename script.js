// Ambil parameter URL
const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");

// Target elemen
const namaEl = document.getElementById("namaTamu");

// Set nama tamu
if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// Tombol buka undangan
function openInvitation() {
  // ganti ke halaman utama nanti, misalnya home.html
  window.location.href = "home.html";
}
