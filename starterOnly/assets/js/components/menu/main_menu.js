import { menuRefs } from "./domReferences/domRefs_menu.js";


const editNav = () => {
    console.log('hello  there!')
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const initiateMenuEvents = () => {
    menuRefs.icon.addEventListener('click', editNav)
}

export { initiateMenuEvents }