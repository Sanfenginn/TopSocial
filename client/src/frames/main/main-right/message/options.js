const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    let activeOption = document.querySelector(".option.active");
    if (activeOption) {
      activeOption.classList.remove("active");
    }
    option.classList.add("active");
  });
});
