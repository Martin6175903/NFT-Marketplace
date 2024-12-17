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

export default checkField;