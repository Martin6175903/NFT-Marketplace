const timeElems = document.querySelectorAll('.change-time');
const [elemHours, elemMinutes, elemSeconds] = timeElems;

function changeDateAuction() {
    if (Number(elemSeconds.textContent) === 0) {
        elemSeconds.textContent = `59`;
        elemMinutes.textContent -= 1;
        elemMinutes.textContent = elemMinutes.textContent.length === 1 ? `0${elemMinutes.textContent}` : elemMinutes.textContent;
        return 0;
    }
    if (Number(elemMinutes.textContent) === 0) {
        elemSeconds.textContent = `59`;
        elemMinutes.textContent -= 1;
        elemHours.textContent -= 1;
        elemMinutes.textContent = elemMinutes.textContent.length === 1 ? `0${elemMinutes.textContent}` : elemMinutes.textContent;
        elemHours.textContent = elemHours.textContent.length === 1 ? `0${elemHours.textContent}` : elemHours.textContent;
        return 0;
    }
    if (Number(elemHours.textContent) === 0 && Number(elemMinutes.textContent) === 0 && Number(elemSeconds.textContent) === 0) {
        document.querySelector(".mashrooms__item-info").textContent = "The auction is over";
        return 0;
    }
    elemSeconds.textContent -= 1;
    elemSeconds.textContent = elemSeconds.textContent.length === 1 ? `0${elemSeconds.textContent}` : elemSeconds.textContent;
}

export default changeDateAuction;