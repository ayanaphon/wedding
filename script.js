// Ambil parameter URL
const params = new URLSearchParams(window.location.search);
const tamu = params.get("tamu");

// Target elemen nama tamu
const namaEl = document.getElementById("namaTamu");

// Set nama tamu
if (tamu) {
  namaEl.textContent = decodeURIComponent(tamu);
} else {
  namaEl.textContent = "Tamu Undangan";
}

// Tombol buka undangan
function openInvitation() {
  // jika belum ada halaman lanjutan, biarkan dulu
  // nanti bisa diganti ke home.html
  alert("Undangan dibuka");
}
