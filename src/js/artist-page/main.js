import burgerOpen from "../chunk/burgerMenu";
import changeBackground from "../chunk/changeBackground";
import changeStateNavBtns from "../chunk/changeStateNavBtns";

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", function() {
    changeBackground(document.querySelector(".artist__box-bg"), "artist-page/artist", [320, 320, 250]);
})

document.body.onresize = function () {
    changeBackground(document.querySelector(".artist__box-bg"), "artist-page/artist", [320, 320, 250]);
}

changeStateNavBtns(document.querySelector(".discover__nav-btns"));