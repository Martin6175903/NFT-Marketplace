import burgerOpen from "./burgerMenu/burgerMenu";


document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", function() {
    if (this.location.href === 'http://localhost:3000/html/signup.html') {
        document.querySelector(".header__link-action").onclick = function (e) {
            e.preventDefault();
        }
    }
})

document.querySelector(".create__form").onsubmit = function (e) {
    return false;
}