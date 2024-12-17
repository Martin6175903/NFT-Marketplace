import burgerOpen from "../chunk/burgerMenu";

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu__item:nth-child(3)>a").href = "./wallet.html";
    document.querySelector(".footer__item-box:nth-child(3)>a").href = "./wallet.html";
    changeBackground();
})

document.body.onresize = function () {
    changeBackground();
}

function changeBackground() {
    const createBG = document.querySelector(".wallet__item-bg");
    if (window.innerWidth > 1100) {
        if (createBG.src !== "../../../img/user%20actions/connect-wallet-bg.jpg") {
            createBG.src = "../../../img/user%20actions/connect-wallet-bg.jpg";
        }
    }
    else if (window.innerWidth > 600 && window.innerWidth <= 1100) {
        if (createBG.src !== "../../../img/user%20actions/connect-wallet-tablet.jpg") {
            createBG.src = "../../../img/user%20actions/connect-wallet-tablet.jpg";
        }
    } else {
        if (createBG.src !== "../../../img/user%20actions/connect-wallet-mobile.jpg") {
            createBG.src = "../../../img/user%20actions/connect-wallet-mobile.jpg";
        }
    }
}