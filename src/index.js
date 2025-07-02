function disableImageDrag() {
    const imgs = document.querySelectorAll("img[draggable=\"false\"");
    imgs.forEach((v) => v.ondragstart = (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
}

function initNavlinks() {
    /** @type {HTMLDivElement | null} el  */
    const el = document.querySelector(".open-nav-links");
    if (!el)
        return;

    /** @type {HTMLDivElement | null} el  */
    const target = document.querySelector(`#${el.dataset.openTarget}`);

    el.onclick = (e) => {
        e.stopPropagation();

        target.classList.toggle("modal");
        target.classList.toggle("open");
    }

    const btnClose = target.querySelector("button");
    const closeFn = (e) => {
        e.stopPropagation();

        target.classList.remove("modal");
        target.classList.remove("open");
    };
    target.onclick = closeFn;
    btnClose.onclick = closeFn;
}

function initBackToTopBtn() {
    const el = document.querySelector(".back-to-top");
    if (!el)
        return;

    window.onscroll = (e) => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (window.scrollY/docHeight) * 100;
        if (scrollPercent < 15) {
            el.classList.replace("show", "hide");
            return;
        }

        el.classList.replace("hide", "show");
        console.log(docHeight, scrollPercent);
    };
}

window.onload = () => {
    disableImageDrag();
    initNavlinks();
    initBackToTopBtn();
}