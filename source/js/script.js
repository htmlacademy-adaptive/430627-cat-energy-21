//Меню
const menuButton = document.querySelector(".main-menu__toggle");

if ((!menuButton.classList.contains("main-menu__toggle--close")) && (!menuButton.classList.contains("main-menu__toggle--open"))) {
  menuButton.classList.add("main-menu__toggle--open");
}

menuButton.addEventListener("click", function (evt) {
  if (menuButton.classList.contains("main-menu__toggle--close")) {
    menuButton.classList.add("main-menu__toggle--open");
    menuButton.classList.remove("main-menu__toggle--close");
  } else {
    menuButton.classList.add("main-menu__toggle--close");
    menuButton.classList.remove("main-menu__toggle--open");
  }
});
