    document.addEventListener("DOMContentLoaded", function () {
      const dotsContainer = document.querySelector(".dots-container");
      const totalSlides = 6; // Nombre de logos (avant répétition pour effet infini)
      let currentIndex = 0;
  
      // Création des points
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
      }
  
      const dots = document.querySelectorAll(".dot");
  
      function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
      }
  
      function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateDots();
      }
  
      setInterval(nextSlide, 2000); // Change de point toutes les 2 secondes
    });
  //nos realisation
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotsContainer = document.querySelector(".dots-container");

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Création des points indicateurs
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });
    });

    // Défilement automatique toutes les 4 secondes
    setInterval(nextSlide, 4000);
  });



  function toggleText() {
    const extraText = document.getElementById('extra-text');
    const button = document.querySelector('.read_more_btn');
    
    if (extraText.style.display === "none") {
      extraText.style.display = "block";
      button.textContent = "Read Less";
    } else {
      extraText.style.display = "none";
      button.textContent = "Read More";
    }
  }
  
  function toggleText1() {
    const extraText1 = document.getElementById('extra-text1');
    const button = document.querySelector('.read_more_btn1');
    
    if (extraText1.style.display === "none") {
      extraText1.style.display = "block";
      button.textContent = "Read Less";
    } else {
      extraText1.style.display = "none";
      button.textContent = "Read More";
    }
  }
  function toggleText2() {
    const extraText2 = document.getElementById('extra-text2');
    const button = document.querySelector('.read_more_btn2');
    
    if (extraText2.style.display === "none") {
      extraText2.style.display = "block";
      button.textContent = "Read Less";
    } else {
      extraText2.style.display = "none";
      button.textContent = "Read More";
    }
  }

  function toggleText3() {
    const extraText3 = document.getElementById('extra-text3');
    const button = document.querySelector('.read_more_btn3');
    
    if (extraText3.style.display === "none") {
      extraText3.style.display = "block";
      button.textContent = "Read Less";
    } else {
      extraText3.style.display = "none";
      button.textContent = "Read More";
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const valeurs = document.querySelectorAll(".valeur");

    const revealOnScroll = () => {
        valeurs.forEach((valeur) => {
            const rect = valeur.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                valeur.style.opacity = 1;
                valeur.style.transform = "translateY(0)";
            }
        });
    };

    valeurs.forEach((valeur) => {
        valeur.style.transform = "translateY(30px)";
        valeur.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});


  