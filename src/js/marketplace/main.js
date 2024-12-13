import burgerOpen from "./burgerMenu/burgerMenu";

document.querySelector(".header__burger").onclick = burgerOpen;

const discoverNavBtns = document.querySelector(".discover__nav-btns");

discoverNavBtns.onclick = function (event) {
    let target = event.target.closest(".discover__nav-btn");
    const btnActive = discoverNavBtns.querySelector(".btn--active");
    if (!target) return false;

    if (target.classList.contains("btn--active")) return false;

    btnActive.classList.remove("btn--active");
    target.classList.add("btn--active");
}