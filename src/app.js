const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
