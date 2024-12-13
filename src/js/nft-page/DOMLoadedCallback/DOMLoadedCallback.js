import { settingDate, changeDateAuction } from "../timerAuction/timerAuction";
import changeBackground from "../changeBackground/changeBackground";

export default function() {
    const baseSrc = "url('../../img/homepage/mashrooms/";

    if (!localStorage.getItem("timerAuction")) {
        localStorage.setItem("timerAuction", `${new Date()}`)
    }

    changeBackground();

    settingDate();

    setInterval(changeDateAuction, 1000)
}