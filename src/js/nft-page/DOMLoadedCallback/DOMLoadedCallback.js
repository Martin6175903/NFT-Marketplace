import changeBackground from "../../chunk/changeBackground";
import settingDate from "../../chunk/timerAuction/timerAuction";
import changeDateAuction from "../../chunk/timerAuction/changeDateAuction";

export default function() {

    if (!localStorage.getItem("timerAuction")) {
        localStorage.setItem("timerAuction", `${new Date()}`)
    }

    changeBackground(document.querySelector(".nft__box-bg"), "nft-page/nft", [560, 420, 320]);

    settingDate();

    setInterval(changeDateAuction, 1000)
}