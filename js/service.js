document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    document.getElementById("next").addEventListener("click", function () {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    document.getElementById("prev").addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    // Défilement automatique
    setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlider();
    }, 4000);
});
