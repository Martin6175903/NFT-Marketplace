const body = document.body;
const subscribeFormEmail = document.querySelector(".subscribe__form-email");
const footerFormEmail = document.querySelector(".subscribe__form-email");
const mashroomElem = document.querySelector(".mashrooms");

export default function() {
    const baseSrc = "url('../../img/homepage/mashrooms/"
    if (window.innerWidth > 768) {
        mashroomElem.style.backgroundImage = `${baseSrc}mashroom.jpg')`;
    } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
        mashroomElem.style.backgroundImage = `${baseSrc}mashroom-tablet.jpg')`;
    } else {
        mashroomElem.style.backgroundImage = `${baseSrc}mashroom-mobile.jpg')`;
    }
    if (window.innerWidth <= 768) {
        subscribeFormEmail.placeholder = "Enter Your Email Address";
        footerFormEmail.placeholder = "Enter Your Email Address";
    } else if (document.querySelector(".subscribe__form-email").placeholder !== 'Enter your email here') {
        subscribeFormEmail.placeholder = 'Enter your email here';
        footerFormEmail.placeholder = 'Enter your email here';
    }
}