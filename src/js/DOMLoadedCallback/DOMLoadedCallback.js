import { settingDate, changeDateAuction } from "../timerAuction/timerAuction";

const mashroomElem = document.querySelector(".mashrooms");
const body = document.body;
const subscribeFormEmail = document.querySelector(".subscribe__form-email");
const footerFormEmail = document.querySelector(".subscribe__form-email");

export default function() {
    const baseSrc = "url('../../img/homepage/mashrooms/";

    if (body.clientWidth > 480 && body.clientWidth < 768) {
        mashroomElem.style.backgroundImage = `${baseSrc}mashroom-tablet.jpg')`;
    } else if (body.clientWidth <= 480) {
        mashroomElem.style.backgroundImage = `${baseSrc}mashroom-mobile.jpg')`;
    }

    if (body.clientWidth < 768) {
        subscribeFormEmail.placeholder = "Enter Your Email Address";
        footerFormEmail.placeholder = "Enter Your Email Address";
    }
    if (!localStorage.getItem("timerAuction")) {
        localStorage.setItem("timerAuction", `${new Date()}`)
    }
    settingDate();

    setInterval(changeDateAuction, 1000)
}