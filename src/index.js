function clamp(v, min, max) {
    return Math.min(max, Math.max(v, min));
}

function disableImageDrag() {
    const imgs = document.querySelectorAll("img[draggable=\"false\"");
    imgs.forEach((v) => v.ondragstart = (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
}

function initDraggableGallery() {
    /** @type {HTMLDivElement | null} el */
    const el = document.querySelector(".draggable-gallery");

    /** @type {HTMLDivElement | null} scrollable */
    const scrollable = document.querySelector(".draggable-gallery:first-child");
    if (!el || !scrollable)
        return;

    let isDragging = false;
    const scrollX = 0;
    let mouseXStart = 0;
    let scrollLeftStart = 0;
    let currentScrollLeft = 0;

    scrollable.style.transform = `translateX(${currentScrollLeft}%)`;

    /** @param {MouseEvent} e */
    el.onmousedown = (e) => {
        e.preventDefault();
        e.stopPropagation();

        mouseXStart = e.clientX;
        // scrollLeftStart = el.scrollLeft;
        scrollLeftStart = currentScrollLeft;
        isDragging = true;
        console.log("start", mouseXStart, scrollLeftStart);
    };

    /** @param {MouseEvent} e */
    el.onmousemove = (e) => {
        if (!isDragging)
            return;
        e.preventDefault();
        e.stopPropagation();

        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        let scroll = (mouseXStart - e.clientX) * 1;
        scroll = scrollLeftStart + scroll;
        // scroll = scrollLeftStart - scroll;
        
        console.log("scrollV", scrollLeftStart + scroll, maxScrollLeft);
        currentScrollLeft = scroll;
        scrollable.style.transform = `translateX(${-scroll}px)`;
        // el.scrollLeft = scroll;
    };

    /** @param {MouseEvent} e */
    el.onmouseup = (e) => {
        e.preventDefault();
        e.stopPropagation();

        isDragging = false;
        console.log(el.scrollLeft);
    };
}

window.onload = () => {
    disableImageDrag();
    // initDraggableGallery();
}