import burgerOpen from "./burgerMenu/burgerMenu";
import changeStatsBtns from "./changeStatsBtns/changeStatsBtns";

document.querySelector(".header__burger").onclick = burgerOpen;

document.addEventListener("DOMContentLoaded", function (e) {
    changeStatsBtns();
})

const statsNavBtns = document.querySelector(".stats__nav-btns");

statsNavBtns.onclick = function (event) {
    let target = event.target.closest(".stats__nav-btn");
    const btnActive = statsNavBtns.querySelector(".btn--active");
    if (!target) return false;

    if (target.classList.contains("btn--active")) return false;

    btnActive.classList.remove("btn--active");
    target.classList.add("btn--active");
}

document.body.onresize = changeStatsBtns;