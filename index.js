document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    let previousScrollPosition = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const currentScrollPosition = window.scrollY;
        const scrollingDown =
            currentScrollPosition > previousScrollPosition;

        if (scrollingDown && currentScrollPosition > 80) {
            navbar.classList.add("hide");
        } else {
            navbar.classList.remove("hide");
        }

        if (currentScrollPosition <= 10) {
            navbar.classList.remove("hide");
        }

        previousScrollPosition = Math.max(currentScrollPosition, 0);
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        },
        { passive: true }
    );
});