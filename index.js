document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    let lastScroll = window.scrollY;

    window.addEventListener(
        "scroll",
        () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 80) {
                navbar.classList.add("hide");
            } else if (currentScroll < lastScroll) {
                navbar.classList.remove("hide");
            }

            if (currentScroll <= 10) {
                navbar.classList.remove("hide");
            }

            lastScroll = Math.max(currentScroll, 0);
        },
        { passive:true }
    );
});