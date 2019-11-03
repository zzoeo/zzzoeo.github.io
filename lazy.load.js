const images = document.querySelectorAll("[data-src]")

const imgObserver = new IntersectionObserver((entries, imbObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersection) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);