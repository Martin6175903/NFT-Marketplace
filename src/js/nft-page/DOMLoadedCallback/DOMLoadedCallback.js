import { settingDate, changeDateAuction } from "../timerAuction/timerAuction";

export default function() {
    const baseSrc = "url('../../img/homepage/mashrooms/";

    if (!localStorage.getItem("timerAuction")) {
        localStorage.setItem("timerAuction", `${new Date()}`)
    }

    settingDate();

    setInterval(changeDateAuction, 1000)
}