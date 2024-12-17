import checkField from "./checkField";
import changePassword from "./changePassword";

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

function formElemsClick() {
    let target = event.target;
    if (target.closest(".form__btn-disclosure")) {
        changePassword(target);
    }
}


export { formSubmit, formElemsClick }