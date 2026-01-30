// Ambil parameter URL
const params = new URLSearchParams(window.location.search);
const namaTamu = params.get("tamu");

// Ambil elemen nama tamu
const elNama = document.getElementById("namaTamu");

// Tampilkan nama jika ada
if (namaTamu && elNama) {
  elNama.textContent = "Yth. " + decodeURIComponent(namaTamu);
} else if (elNama) {
  elNama.textContent = "Yth. Tamu Undangan";
}
