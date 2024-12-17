function changeStateNavBtns(elemNavBtns) {
    elemNavBtns.onclick = function (event) {
        let target = event.target.closest(".discover__nav-btn");
        const btnActive = elemNavBtns.querySelector(".btn--active");

        if (!target) return false;

        if (target.classList.contains("btn--active")) return false;

        btnActive.classList.remove("btn--active");
        target.classList.add("btn--active");
    }
}

export default changeStateNavBtns;