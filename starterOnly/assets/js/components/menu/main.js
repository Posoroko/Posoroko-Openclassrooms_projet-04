import { menuRefs } from "./domRefs_menu.js"

const editNav = () => {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
      x.className += " responsive"
    } else {
      x.className = "topnav"
    }
  }

const initiateMenuEvents = () => {
    menuRefs.icon.addEventListener('click', editNav)
}

export { initiateMenuEvents }