// Burger Menu

function burgerOpen() {
    const burgerMenu = document.querySelector(".header__burger");
    const navMenu = document.querySelector(".nav");
    burgerMenu.classList.toggle("burger-open");
    if (burgerMenu.classList.contains("burger-open")) navMenu.style.right = '20px';
    else navMenu.style.right = '-600px';
}

export default burgerOpen;