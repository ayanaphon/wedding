document.addEventListener("DOMContentLoaded", function () {

  /* ================= NAMA TAMU ================= */

  const params = new URLSearchParams(window.location.search);
  let tamu = params.get("tamu");

  if (tamu) {
    localStorage.setItem("namaTamu", tamu);
  } else {
    tamu = localStorage.getItem("namaTamu");
  }

  tamu = tamu || "Tamu Undangan";

  document.querySelectorAll(".namaTamu").forEach(el => {
    el.textContent = decodeURIComponent(tamu);
  });


  /* ================= OPEN INVITATION ================= */

  const openBtn = document.querySelector(".open-btn");
  const coverCard = document.getElementById("coverCard");
  const salamSection = document.getElementById("salamSection");
  const bottomNav = document.getElementById("bottomNav");

  if (openBtn) {
    openBtn.addEventListener("click", function () {
      coverCard.style.display = "none";
      salamSection.classList.add("show");
      bottomNav.classList.add("show");
    });
  }

});
