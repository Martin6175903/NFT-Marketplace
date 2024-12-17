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

export default changePassword;