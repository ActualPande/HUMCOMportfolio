document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute("data-skill");
                bar.style.setProperty('--target', value);
                bar.classList.add("animated");
                bar.style.width = value;
            }
        });
    }, {
        threshold: 0.4
    });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});