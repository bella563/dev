let indexASupprimer = null;

// Fonction pour afficher toutes les annonces
function afficherAnnonces() {
  const annoncesRow = document.getElementById("annoncesRow");
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
          <button class="btn btn-danger btn-sm" onclick="confirmerSuppression(${index})">Supprimer</button>
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
  document.getElementById("editDateExpiration").value = annonce.dateExpiration || "";
  document.getElementById("editImage").value = "";

  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  modal.show();
}

// Gestion de la soumission du formulaire de modification
document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const index = document.getElementById("editIndex").value;
  const titre = document.getElementById("editTitre").value;
  const contenu = document.getElementById("editContenu").value;
  const dateExpiration = document.getElementById("editDateExpiration").value;
  const imageInput = document.getElementById("editImage");

  let annonces = JSON.parse(localStorage.getItem("annonces")) || [];
  let annonce = annonces[index];

  annonce.titre = titre;
  annonce.contenu = contenu;
  annonce.dateExpiration = dateExpiration;

  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      annonce.image = e.target.result;
      annonces[index] = annonce;
      localStorage.setItem("annonces", JSON.stringify(annonces));
      afficherAnnonces();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    annonces[index] = annonce;
    localStorage.setItem("annonces", JSON.stringify(annonces));
    afficherAnnonces();
  }

  const modal = bootstrap.Modal.getInstance(document.getElementById("editModal"));
  modal.hide();
});

// Fonction appelée pour demander confirmation avant suppression
function confirmerSuppression(index) {
  indexASupprimer = index;
  document.getElementById("passwordInput").value = "";
  const modal = new bootstrap.Modal(document.getElementById("passwordModal"));
  modal.show();
}

// Confirmation de suppression avec mot de passe
document.getElementById("confirmerSuppressionBtn").addEventListener("click", () => {
  const password = document.getElementById("passwordInput").value;
  const modalElement = document.getElementById("passwordModal");
  const modal = bootstrap.Modal.getInstance(modalElement);

  if (password === "secret2025") {
    supprimerAnnonce(indexASupprimer);
    modal.hide();
  } else {
    afficherNotification("Mot de passe incorrect.", "danger");
    modal.hide();
  }
});

// Supprime une annonce
function supprimerAnnonce(index) {
  let annonces = JSON.parse(localStorage.getItem("annonces")) || [];
  annonces.splice(index, 1);
  localStorage.setItem("annonces", JSON.stringify(annonces));
  afficherAnnonces();
}

// Notification stylisée
function afficherNotification(message, type) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3`;
  alert.style.zIndex = "9999";
  alert.textContent = message;

  document.body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 4000);
}

// Initialisation au chargement
afficherAnnonces();
