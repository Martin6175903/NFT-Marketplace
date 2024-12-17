import burgerOpen from "../chunk/burgerMenu";
import DOMLoadedCallback from "./DOMLoadedCallback/DOMLoadedCallback"
import changeBackground from "../chunk/changeBackground";

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", DOMLoadedCallback);

document.body.onresize = function () {
    changeBackground(document.querySelector(".nft__box-bg"), "nft-page/nft", [560, 420, 320]);
}

const timeElems = document.querySelectorAll('.change-time');
const [elemHours, elemMinutes, elemSeconds] = timeElems;
const dateStorage = new Date(localStorage.getItem("timerAuction"));

window.addEventListener("unload", function () {
    dateStorage.setHours(Number(elemHours.textContent), Number(elemMinutes.textContent), Number(elemSeconds.textContent))
    localStorage.setItem("timerAuction", `${dateStorage}`);
})