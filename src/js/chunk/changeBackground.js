function changeBackground(elementBG, src, [desk, tablet, mobile]) {
    if (window.innerWidth > 768) {
        elementBG.style.background = `url('../../../img/${src}-bg.jpg') center center no-repeat`;
        elementBG.style.height = desk + 'px';
    }
    if (window.innerWidth > 480 && window.innerWidth <= 768) {
        elementBG.style.background = `url('../../../img/${src}-tablet.jpg') center center no-repeat`;
        elementBG.style.height = tablet + 'px';
    }
    if (window.innerWidth <= 480) {
        elementBG.style.background = `url('../../../img/${src}-mobile.jpg') center center no-repeat`;
        elementBG.style.height = mobile + 'px';
    }
}

export default changeBackground;