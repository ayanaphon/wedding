// Ambil nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");
const namaEl = document.getElementById("namaTamu");

// Set nama tamu
if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// Fungsi buka undangan
function openInvitation() {
  document.body.classList.remove("locked");

  // contoh lanjut ke halaman utama nanti
  // window.location.href = "home.html";
}
