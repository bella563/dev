<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Validation basique des données
    if (empty($name) || empty($email) || empty($message)) {
        echo "Tous les champs sont requis.";
        exit;
    }

    // Envoyer l'email
    $to = "khoumandcompagnie@gmail.com";  // Adresse e-mail où recevoir les messages
    $subject = "Message de contact depuis votre site";
    $body = "Nom : $name\nEmail : $email\n\nMessage :\n$message";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Fonction d'envoi d'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Échec de l'envoi du message.";
    }
}
?>