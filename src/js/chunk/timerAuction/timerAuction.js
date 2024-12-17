const timeElems = document.querySelectorAll('.change-time');
const [elemHours, elemMinutes, elemSeconds] = timeElems;
const dateStorage = new Date(localStorage.getItem("timerAuction"));

function settingDate() {
    elemHours.textContent = `${dateStorage.getHours()}`.length === 1 ? `0${dateStorage.getHours()}` : `${dateStorage.getHours()}`;
    elemMinutes.textContent = `${dateStorage.getMinutes()}`.length === 1 ? `0${dateStorage.getMinutes()}` : `${dateStorage.getMinutes()}`;
    elemSeconds.textContent = `${dateStorage.getSeconds()}`.length === 1 ? `0${dateStorage.getSeconds()}` : `${dateStorage.getSeconds()}`;
}

export default settingDate;