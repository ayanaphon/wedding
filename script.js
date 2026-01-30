document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     NAMA TAMU DINAMIS
  ========================= */

  const params = new URLSearchParams(window.location.search);
  const tamu = params.get("tamu");
  const namaEl = document.getElementById("namaTamu");

  if (namaEl) {
    namaEl.textContent = tamu
      ? decodeURIComponent(tamu)
      : "Tamu Undangan";
  }

  /* =========================
     FADE STAGGER ANIMATION
  ========================= */

  const elements = document.querySelectorAll(".fade");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 300);
  });

});
