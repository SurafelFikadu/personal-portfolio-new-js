const icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.src = "images/moon.png";
  } else {
    icon.src = "images/sun.png";
  }
};

const menu = document.getElementById("menu");
const clos = document.getElementById("close");

const closeUl = document.querySelector(".close-ul");

menu.onclick = () => {
  closeUl.style.left = "0";
};

clos.onclick = () => {
  closeUl.style.left = "-360px";
};
