document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire

    var formData = new FormData(this);

    fetch("submit_form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Afficher la réponse du serveur
    })
    .catch(error => {
        console.error("Erreur:", error);
        alert("Erreur lors de l'envoi du message.");
    });
});
