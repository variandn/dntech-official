

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".poster-slide");
    let scrollAmount = 0;
    let speed = 1; // Adjust speed (higher = faster)

    function autoScroll() {
        if (slider) {
            scrollAmount += speed;
            if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
                scrollAmount = 0; // Reset to the start
            }
            slider.scrollLeft = scrollAmount;
        }
    }

    setInterval(autoScroll, 50); // Adjust interval speed
});