import burgerOpen from "./burgerMenu/burgerMenu";

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", function() {
    changeBackground();
})

document.body.onresize = function () {
    changeBackground();
}

function changeBackground() {
    const artistBG = document.querySelector(".artist__box-bg");
    if (window.innerWidth > 768) {
        artistBG.style.background = "url('../../../img/artist-page/artist-bg.jpg') center center no-repeat";
        artistBG.style.height = '320px';
    }
    if (window.innerWidth > 480 && window.innerWidth <= 768) {
        artistBG.style.background = "url('../../../img/artist-page/artist-tablet.jpg') center center no-repeat";
        artistBG.style.height = '320px';
    }
    if (window.innerWidth <= 480) {
        artistBG.style.background = "url('../../../img/artist-page/artist-mobile.jpg') center center no-repeat";
        artistBG.style.height = '250px';
    }
}

const discoverNavBtns = document.querySelector(".discover__nav-btns");

discoverNavBtns.onclick = function (event) {
    let target = event.target.closest(".discover__nav-btn");
    const btnActive = discoverNavBtns.querySelector(".btn--active");
    if (!target) return false;

    if (target.classList.contains("btn--active")) return false;

    btnActive.classList.remove("btn--active");
    target.classList.add("btn--active");
}