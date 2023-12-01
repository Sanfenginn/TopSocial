const card = document.querySelectorAll(".card");

card.forEach((element) => {
  element.addEventListener("touchstart", () => {
    element.classList.add("card-touch-shadow");
  });
  element.addEventListener("touchend", () => {
    element.classList.remove("card-touch-shadow");
  });
});
