window.addEventListener("DOMContentLoaded", () => {
    // if (!localStorage.getItem("timeAuction")) {
    //     localStorage.setItem("timeAuction", new Date().toJSON())
    // }
    // setInterval(() => {
    //     const date = new Date(localStorage.getItem("timeAuction"));
    //     let hours = date.getHours();
    //     let minutes = date.getMinutes();
    //     let seconds = date.getSeconds();
    //     console.log(hours, minutes, seconds)
    //     if (seconds == 59) {
    //         date.setHours(hours, minutes - 1, seconds)
    //     }
    //     if (minutes == 59) {
    //         date.setHours(hours - 1, minutes, seconds)
    //     }
    // }, 1000)
    setTimeout(() => {
        const date = new Date();
        const timeElems = document.querySelectorAll(`.change-time`);
        const [elemHours, elemMinutes, elemSeconds] = timeElems;
        elemHours.textContent =`${date.getHours()}`.length === 1 ? `0${date.getHours()}` : `${date.getHours()}`;
        elemMinutes.textContent = `${date.getMinutes()}`.length === 1 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        elemSeconds.textContent = `${date.getSeconds()}`.length === 1 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    })
    setInterval(() => {
        const date = new Date();
        const timeElems = document.querySelectorAll(`.change-time`);
        const [elemHours, elemMinutes, elemSeconds] = timeElems;
        elemHours.textContent =`${date.getHours()}`.length === 1 ? `0${date.getHours()}` : `${date.getHours()}`;
        elemMinutes.textContent = `${date.getMinutes()}`.length === 1 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        elemSeconds.textContent = `${date.getSeconds()}`.length === 1 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    }, 1000)
})

document.querySelector(".header__burger").onclick = burgerOpen;
function burgerOpen() {
    const burgerMenu = document.querySelector(".header__burger");
    const navMenu = document.querySelector(".nav");
    burgerMenu.classList.toggle("burger-open");
    if (burgerMenu.classList.contains("burger-open")) navMenu.style.right = '20px';
    else navMenu.style.right = '-600px';
}
