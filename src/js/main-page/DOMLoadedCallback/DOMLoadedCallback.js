import settingDate from "../../chunk/timerAuction/timerAuction";
import changeDateAuction from "../../chunk/timerAuction/changeDateAuction";

const mashroomElem = document.querySelector(".mashrooms");
const body = document.body;
const subscribeFormEmail = document.querySelector(".subscribe__form-email");
const footerFormEmail = document.querySelector(".subscribe__form-email");

export default function() {
    const baseSrc = "url('../../img/homepage/mashrooms/";

    if (window.innerWidth > 768) {
        mashroomElem.style.backgroundImage = `${baseSrc}mashrooms-bg.jpg')`;
    } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
        mashroomElem.style.backgroundImage = `${baseSrc}mashrooms-tablet.jpg')`;
    } else {
        mashroomElem.style.backgroundImage = `${baseSrc}mashrooms-mobile.jpg')`;
    }

    if (window.innerWidth <= 768) {
        subscribeFormEmail.placeholder = "Enter Your Email Address";
        footerFormEmail.placeholder = "Enter Your Email Address";
    }

    if (!localStorage.getItem("timerAuction")) {
        localStorage.setItem("timerAuction", `${new Date()}`)
    }

    settingDate();

    setInterval(changeDateAuction, 1000)
}