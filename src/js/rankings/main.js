import burgerOpen from "../chunk/burgerMenu";
import changeStatsBtns from "./changeStatsBtns/changeStatsBtns";
import changeStateNavBtns from "../chunk/changeStateNavBtns";

document.querySelector(".header__burger").onclick = burgerOpen;

document.addEventListener("DOMContentLoaded", function (e) {
    changeStatsBtns();
})

changeStateNavBtns(document.querySelector(".stats__nav-btns"));

document.body.onresize = changeStatsBtns;