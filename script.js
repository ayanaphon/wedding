// Ambil parameter URL
const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");

// Target elemen nama tamu
const namaEl = document.getElementById("Darten");

// Tampilkan nama tamu
if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// Tombol buka undangan
function openInvitation() {
  // ganti ke halaman utama undangan
  window.location.href = "home.html";
}
