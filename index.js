    document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
}
});
},
{ threshold: 0.10 }
    );

    items.forEach((item) => observer.observe(item));
});


        document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        const track = carousel.querySelector("[data-track]");
        const prev = carousel.querySelector("[data-prev]");
        const next = carousel.querySelector("[data-next]");

        function slide(dir) {
        const width = track.clientWidth;       // 1 slide = 100% breedte
        track.scrollBy({ left: dir * width, behavior: "smooth" });
    }

        prev.addEventListener("click", () => slide(-1));
        next.addEventListener("click", () => slide(1));
    });


    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    document.addEventListener("click", (e) => {
        const img = e.target.closest("img[data-lightbox]");
        if (!img) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "";
        lightbox.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
    });

    function closeLightbox() {
        lightbox.setAttribute("hidden", "");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

