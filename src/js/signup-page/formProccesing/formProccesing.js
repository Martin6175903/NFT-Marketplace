function formSubmit() {
    const inputElems = this.querySelectorAll(".form__input");
    let pswElem = document.querySelector(".create__form-password");
    let pswConfElem = document.querySelector(".create__form-confpassword");
    let validation = true;
    for (const inputElem of inputElems) {
        if (inputElem.value.length === 0) {
            inputElem.parentElement.classList.add("field--failed");
            validation = false;
        }
        if (!checkField(inputElem)) validation = false;
    }
    if (pswElem.value !== pswConfElem.value) {
        const elem = document.createElement("p");
        setTimeout(() => {
            elem.className = "form__psw--failed title-level-five";
            elem.textContent = 'Пароли не совпадают!';
            document.querySelector(".create__form").append(elem);
        })
        setTimeout(() => elem.remove(), 3000);
        validation = false;
    }
    return validation;
}

function checkField(inputElem) {
    let regExp = {
        text: /([A-Z]+)[a-zA-Z]{4,10}[0-9]{1,9}/g,
        email: /(^[a-zA-Z]+)[0-9]*@[a-z]{3,7}\.[a-z]{2,7}/g
    }
    let result = null;
    if (inputElem.type === 'text' || inputElem.type === 'password') {
        result = regExp.text.test(inputElem.value);
    } else {
        result = regExp.email.test(inputElem.value)
    }
    return result;
}

function changePassword(target) {
    let btnTarget = target.closest(".form__btn-disclosure");
    const pswElem = btnTarget.previousElementSibling;
    if (btnTarget.firstElementChild.src.includes("slash")) {
        pswElem.type = 'text';
        btnTarget.firstElementChild.src = '../../../img/eye-open.svg';
    } else {
        pswElem.type = 'password';
        btnTarget.firstElementChild.src = '../../../img/eye-slash.svg';
    }
}

function formElemsClick() {
    let target = event.target;
    if (target.closest(".form__btn-disclosure")) {
        changePassword(target);
    }
}


export { formSubmit, formElemsClick }