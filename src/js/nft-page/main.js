import burgerOpen from "./burgerMenu/burgerMenu";
import DOMLoadedCallback from "./DOMLoadedCallback/DOMLoadedCallback"

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", DOMLoadedCallback);