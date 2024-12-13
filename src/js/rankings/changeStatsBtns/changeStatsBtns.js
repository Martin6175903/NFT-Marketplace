function changeStatsBtns() {
    const statsBtns = document.querySelector(".stats__nav-btns").children;
    if (innerWidth > 600) {
        for (let i = 0; i < statsBtns.length; i++) {
            if (statsBtns[i].firstElementChild.textContent === 'Today') return false;
            switch (i) {
                case 0:
                    statsBtns[i].firstElementChild.textContent = 'Today'
                    break;
                case 1:
                    statsBtns[i].firstElementChild.textContent = 'This Week'
                    break;
                case 2:
                    statsBtns[i].firstElementChild.textContent = 'This Month'
                    break;
            }
        }
    }
    if (innerWidth <= 600) {
        for (let i = 0; i < statsBtns.length; i++) {
            if (statsBtns[i].firstElementChild.textContent === "1d") return  false;
            switch (i) {
                case 0:
                    statsBtns[i].firstElementChild.textContent = '1d'
                    break;
                case 1:
                    statsBtns[i].firstElementChild.textContent = '7d'
                    break;
                case 2:
                    statsBtns[i].firstElementChild.textContent = '30d'
                    break;
            }
        }
    }
}

export default changeStatsBtns;