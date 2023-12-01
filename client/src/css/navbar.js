const navbar = document.querySelector(".sidebar");
const barIcon = document.querySelector(".sidebar-icon");

let navTimeout; // 用于存储定时器ID的变量

function closeNav() {
  navbar.classList.remove("open");
  barIcon.classList.remove("open");
  barIcon.classList.add("close");
}

barIcon.addEventListener("click", () => {
  if (barIcon.classList.contains("close")) {
    navbar.classList.add("open");
    barIcon.classList.remove("close");
    barIcon.classList.add("open");
    clearTimeout(navTimeout); // 清除之前的定时器（如果有的话）
    navTimeout = setTimeout(closeNav, 10000); // 设置10秒后关闭菜单的定时器
  } else if (barIcon.classList.contains("open")) {
    closeNav();
    clearTimeout(navTimeout); // 清除定时器
  }
});

window.addEventListener("scroll", () => {
  closeNav();
  clearTimeout(navTimeout); // 清除定时器
});

document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !barIcon.contains(event.target)) {
    closeNav();
    clearTimeout(navTimeout); // 清除定时器
  }
});

window.addEventListener("resize", () => {
  closeNav();
  clearTimeout(navTimeout); // 清除定时器
});
