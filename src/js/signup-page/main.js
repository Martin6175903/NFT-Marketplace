import burgerOpen from "../chunk/burgerMenu";
import {formElemsClick, formSubmit} from "./formProccesing/formProccesing";

document.querySelector(".header__burger").onclick = burgerOpen;

window.addEventListener("DOMContentLoaded", function() {
    if (this.location.href === 'http://localhost:3000/html/signup.html') {
        document.querySelector(".header__link-action").onclick = function (e) {
            e.preventDefault();
        }
    }
    const createBG = document.querySelector(".create__item-bg");
    if (window.innerWidth < 851) {
        createBG.src = "../../../img/user%20actions/create-account-mobile.jpg";
    } else {
        if (createBG.src !== "../../../img/user%20actions/create-account-bg.jpg") {
            createBG.src = "../../../img/user%20actions/create-account-bg.jpg";
        }
    }
})

window.addEventListener("load", function (e) {
    setTimeout(() => {
        const inputElems = document.querySelectorAll(".form__input");
        for (const inputElem of inputElems) {
            inputElem.value = '';
        }
    }, 500)
    const inputElems = document.querySelectorAll(".form__input");

    for (const inputElem of inputElems) {
        inputElem.onblur = function () {
            if (inputElem.type === 'text' || inputElem.type === 'password') {
                let reg = /([A-Z]+)[a-zA-Z]{4,10}[0-9]{1,9}/g;
                reg.test(inputElem.value) ?
                    inputElem.parentElement.classList.add('field--success')
                    :
                    inputElem.parentElement.classList.add('field--failed');
            } else {
                let reg = /(^[a-zA-Z]+)[0-9]*@[a-z]{3,7}\.[a-z]{2,7}/g;
                reg.test(inputElem.value) ?
                    inputElem.parentElement.classList.add('field--success')
                    :
                    inputElem.parentElement.classList.add('field--failed');
            }
        }
        inputElem.onfocus = function () {
            if (inputElem.parentElement.classList.contains("field--success")) {
                inputElem.parentElement.classList.remove("field--success")
            }
            if (inputElem.parentElement.classList.contains("field--failed")) {
                inputElem.parentElement.classList.remove("field--failed")
            }
        }
    }
})

document.querySelector(".create__form").onclick = formElemsClick;

document.querySelector(".create__form").onsubmit = formSubmit;

document.body.onresize = function () {
    const createBG = document.querySelector(".create__item-bg");
    if (window.innerWidth < 851) {
        createBG.src = "../../../img/user%20actions/create-account-mobile.jpg";
    } else {
        if (createBG.src !== "../../../img/user%20actions/create-account-bg.jpg") {
            createBG.src = "../../../img/user%20actions/create-account-bg.jpg";
        }
    }
}