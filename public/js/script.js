var navbar = document.getElementsByClassName("navbar")[0];
console.log(document.body.clientHeight);

const navbarShadow = () => {};

// navbar.onscroll = navbarShadow();
document.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    navbar.style.boxShadow = "none";
  } else {
    navbar.style.boxShadow = "0px 2px 6px rgba(0,0,0,0.18)";
  }
});

var dropdown = document.getElementsByClassName("dropdown-menu")[0];
var counter;
const showMenu = () => {
  if (counter === undefined || counter === 2) {
    dropdown.style.height = "210px";
    return (counter = 1);
  } else {
    dropdown.style.height = "0px";
    return (counter = 2);
  }
};
const services = document.getElementsByClassName("drop-services")[0];
var c;
const dropServices = () => {
  if (c === undefined || c === 2) {
    services.style.height = "200px";
    return (c = 1);
  } else {
    services.style.height = "0px";
    return (c = 2);
  }
};

var item = document.getElementsByClassName("nav-item");

const changeColor = (e, x) => {
  e.children[0].style.opacity = "1";
  var icon;
  switch (x) {
    case 0:
      icon = null;
      break;
    case 1:
      icon = "learn";
      break;

    case 2:
      icon = "webinar";
      break;
    case 3:
      icon = "signals";
      break;
    case 4:
      icon = "testimonials";
      break;
    case 5:
      icon = "team";
      break;
    case 6:
      icon = "faq";
      break;
    case 7:
      icon = "contact";
      break;
  }
  if (icon != null) {
    e.children[1].src = `/assets/icons/${icon}-white.svg`;
    e.children[1].style.zIndex = "3";
  }
};

const changeBack = (e, x) => {
  e.children[0].style.opacity = "0";

  if (typeof x !== undefined) {
    var icon;
    switch (x) {
      case 0:
        icons = null;
        break;
      case 1:
        icon = "learn";
        break;

      case 2:
        icon = "webinar";
        break;
      case 3:
        icon = "signals";
        break;
      case 4:
        icon = "testimonials";
        e.children[1].style.zIndex = "0";
        break;
      case 5:
        icon = "team";
        e.children[1].style.zIndex = "0";
        break;
      case 6:
        icon = "faq";
        break;
      case 7:
        icon = "contact";
        break;
    }
    if (icon != null) {
      e.children[1].src = `/assets/icons/${icon}.svg`;
    }
  }
};

const buttonOver = (e) => {
  e.children[0].style.opacity = "1";
  e.children[1].style.color = "white";
  e.style.color = "white";
};

const buttonOut = (e) => {
  e.children[0].style.opacity = "0";
  e.style.color = "#3f4045";
  e.children[1].style.color = "#f76d2f";
};
