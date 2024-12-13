import burgerOpen from "./burgerMenu/burgerMenu";
import DOMLoadedCallback from "./DOMLoadedCallback/DOMLoadedCallback"
import changeBackground from "./changeBackground/changeBackground";

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", DOMLoadedCallback);

document.body.onresize = function () {
    changeBackground();
}