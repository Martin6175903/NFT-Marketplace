import burgerOpen from "./burgerMenu/burgerMenu";
import DOMLoadedCallback from "./DOMLoadedCallback/DOMLoadedCallback";
import bodyResizeCallback from "./bodyResizeCallback/bodyResizeCallback";

window.addEventListener("DOMContentLoaded", DOMLoadedCallback)

document.body.onresize = bodyResizeCallback;

//Burger Menu Configuration
document.querySelector(".header__burger").onclick = burgerOpen;
