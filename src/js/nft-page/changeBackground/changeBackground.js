function changeBackground() {
    const nftBG = document.querySelector(".nft__box-bg");
    if (window.innerWidth > 768) {
        nftBG.style.background = "url('../../../img/nft-page/nft-page-bg.jpg') center center no-repeat";
        nftBG.style.height = '560px';
    }
    if (window.innerWidth > 480 && window.innerWidth <= 768) {
        nftBG.style.background = "url('../../../img/nft-page/nft-page-tablet.jpg') center center no-repeat";
        nftBG.style.height = '420px';
    }
    if (window.innerWidth <= 480) {
        nftBG.style.background = "url('../../../img/nft-page/nft-page-mobile.jpg') center center no-repeat";
        nftBG.style.height = '320px';
    }
}

export default changeBackground;