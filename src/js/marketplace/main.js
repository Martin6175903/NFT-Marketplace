import burgerOpen from "../chunk/burgerMenu";
import changeStateNavBtns from "../chunk/changeStateNavBtns";

document.querySelector(".header__burger").onclick = burgerOpen;

changeStateNavBtns(document.querySelector(".discover__nav-btns"));