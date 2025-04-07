document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Initialiser le premier slide
    showSlide(currentSlide);
  
    // Défilement automatique toutes les 5 secondes
    setInterval(nextSlide, 5000);
  });
  