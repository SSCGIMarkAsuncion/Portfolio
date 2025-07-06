function disableImageDrag() {
    const imgs = document.querySelectorAll("img[draggable=\"false\"");
    imgs.forEach((v) => v.ondragstart = (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
}

function initNavlinks() {
    /** @type {HTMLDivElement | null} el  */
    const el = document.querySelector("#open-nav-link");
    /** @type {HTMLDivElement | null} el  */
    const target = document.querySelector(`#target-open`);
    if (!el && !target)
        return;

    el.onclick = (e) => {
        e.stopPropagation();

        target.classList.toggle("modal-open");
    }

    const btnClose = target.querySelector("button");
    const closeFn = (e) => {
        e.stopPropagation();

        target.classList.remove("modal-open");
    };
    target.onclick = closeFn;
    btnClose.onclick = closeFn;
}

function initBackToTopBtn() {
    const el = document.querySelector("#back-to-top");
    if (!el)
        return;

    window.addEventListener("scroll", () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (window.scrollY/docHeight) * 100;

        if (scrollPercent < 15) {
            el.classList.replace("flex", "hide");
            return;
        }

        el.classList.replace("hide", "flex");
        // console.log(docHeight, scrollPercent);
    });
}

function applyAnimSlideOnView() {
    const el = document.querySelectorAll(".project-card");
    el.forEach((e) => {
        e.classList.add("opacity-0");
    });

    /** @param {Event} e */
    window.addEventListener("scroll", () => {
        const viewportHeight = window.innerHeight;
        el.forEach((e) => {
            const elHeight = e.getBoundingClientRect().height;
            const elTop = e.getBoundingClientRect().top;

            const isVisible = (viewportHeight-20 > elTop) && elTop > -elHeight;
            // console.log(viewportHeight, elTop, isVisible);

            e.classList.toggle("opacity-0", !isVisible);
            e.classList.toggle("anim-slide-left", isVisible);
        });
        console.log("");
    });
}

window.onload = () => {
    disableImageDrag();
    initNavlinks();
    initBackToTopBtn();
    applyAnimSlideOnView();
}