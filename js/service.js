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







document.addEventListener("DOMContentLoaded", function () {
    // Afficher un message au chargement de la page
    console.log("Page chargée");
  
    // Dynamiser les articles avec un effet au clic
    const articles = document.querySelectorAll("article");
  
    articles.forEach((article, index) => {
      article.addEventListener("click", function () {
        alert(`Vous avez cliqué sur l'article ${index + 1}`);
      });
    });
  });
  