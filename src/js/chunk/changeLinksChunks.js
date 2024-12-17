import spaceStrDelete from "./spaceStrDelete";

const [menu, link] = document.querySelector(".nav").children;
const footerLinks = document.querySelector(".footer__item-links").children;

function changeLinksChunks() {
    let src = location.pathname.match(/[a-z]+\./)?.join("");
    src = src?.slice(0, src.length - 1);
    if (!src) return 0;

    for (const menuElem of menu.children) {
        const resStr = spaceStrDelete(menuElem.firstElementChild.textContent)
        if (src === 'marketplace') {
            if (resStr === 'Marketplace') {
                menuElem.firstElementChild.href = "/"
            }
        }
        if (src === 'rankings') {
            if (menuElem.firstElementChild.textContent === 'Marketplace') {

            }
        }
        if (src === 'wallet') {
            if (menuElem.firstElementChild.textContent === 'Marketplace') {

            }
        }
    }

}



export default changeLinksChunks;