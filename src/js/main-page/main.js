import burgerOpen from "../chunk/burgerMenu";
import DOMLoadedCallback from "./DOMLoadedCallback/DOMLoadedCallback";
import bodyResizeCallback from "./bodyResizeCallback/bodyResizeCallback";

window.addEventListener("DOMContentLoaded", DOMLoadedCallback)

document.body.onresize = bodyResizeCallback;

//Burger Menu Configuration
document.querySelector(".header__burger").onclick = burgerOpen;

const timeElems = document.querySelectorAll('.change-time');
const [elemHours, elemMinutes, elemSeconds] = timeElems;
const dateStorage = new Date(localStorage.getItem("timerAuction"));

window.addEventListener("unload", function () {
    dateStorage.setHours(Number(elemHours.textContent), Number(elemMinutes.textContent), Number(elemSeconds.textContent))
    localStorage.setItem("timerAuction", `${dateStorage}`);
})
