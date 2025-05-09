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
  




  const annoncesRow = document.getElementById("annoncesRow");

  // Fonction pour afficher toutes les annonces
  function afficherAnnonces() {
    const annonces = JSON.parse(localStorage.getItem("annonces")) || [];
    annoncesRow.innerHTML = "";

    annonces.forEach((annonce, index) => {
      const card = document.createElement("div");
      card.className = "col-md-6 col-lg-4";

      card.innerHTML = `
        <div class="card h-100 shadow">
          <img src="${annonce.image}" class="card-img-top" alt="Image de l'annonce">
          <div class="card-body">
            <h5 class="card-title">${annonce.titre}</h5>
            <p class="card-text">${annonce.contenu}</p>
            <p class="text-muted"><small>Publié le: ${annonce.date}</small></p>
            <button class="btn btn-warning btn-sm me-2" onclick="ouvrirModal(${index})">Modifier</button>
            <button class="btn btn-danger btn-sm" onclick="supprimerAnnonce(${index})">Supprimer</button>
          </div>
        </div>
      `;
      annoncesRow.appendChild(card);
    });
  }

  // Fonction pour ouvrir le modal de modification
  function ouvrirModal(index) {
    const annonces = JSON.parse(localStorage.getItem("annonces")) || [];
    const annonce = annonces[index];
    document.getElementById("editIndex").value = index;
    document.getElementById("editTitre").value = annonce.titre;
    document.getElementById("editContenu").value = annonce.contenu;
    document.getElementById("editImage").value = ""; // Réinitialiser l'image dans le modal

    const modal = new bootstrap.Modal(document.getElementById("editModal"));
    modal.show();
  }

  // Fonction pour supprimer une annonce
  function supprimerAnnonce(index) {
    let annonces = JSON.parse(localStorage.getItem("annonces")) || [];
    annonces.splice(index, 1);
    localStorage.setItem("annonces", JSON.stringify(annonces));
    afficherAnnonces();
  }

  // Écouteur d'événements pour soumettre les modifications
  document.getElementById("editForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const index = document.getElementById("editIndex").value;
    const titre = document.getElementById("editTitre").value;
    const contenu = document.getElementById("editContenu").value;
    const imageFile = document.getElementById("editImage").files[0];

    let annonces = JSON.parse(localStorage.getItem("annonces")) || [];

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function () {
        // Mise à jour de l'annonce avec les nouvelles données
        annonces[index] = {
          ...annonces[index],
          titre: titre,
          contenu: contenu,
          image: reader.result,
          date: new Date().toLocaleString()
        };
        localStorage.setItem("annonces", JSON.stringify(annonces));
        afficherAnnonces();
        bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
      };
      reader.readAsDataURL(imageFile);
    } else {
      // Si aucune image n'est choisie, on met simplement à jour les champs texte
      annonces[index] = {
        ...annonces[index],
        titre: titre,
        contenu: contenu,
        date: new Date().toLocaleString()
      };
      localStorage.setItem("annonces", JSON.stringify(annonces));
      afficherAnnonces();
      bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
    }
  });

  // Initialisation : afficher les annonces au chargement de la page
  afficherAnnonces();
