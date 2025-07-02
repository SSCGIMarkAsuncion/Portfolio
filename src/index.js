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

window.onload = () => {
    disableImageDrag();
    initNavlinks();
}