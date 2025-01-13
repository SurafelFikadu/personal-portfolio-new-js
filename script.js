const icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/moon.png";
    clos.src = "images/icon-close.svg"
    menu.src = "images/icon-menu.svg"
  } else {
    icon.src = "images/sun.png";
    clos.src = "images/close-white.png";
    menu.src = "images/menu-white.png"
  }
};

const menu = document.getElementById("menu");
const clos = document.getElementById("close");

const closeUl = document.querySelector(".close-ul");

menu.onclick = () => {
  closeUl.style.right = "-150px";
};

clos.onclick = () => {
  closeUl.style.right = "-360px";
};
