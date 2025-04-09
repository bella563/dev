
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    if (empty($name) || empty($email) || empty($message)) {
        echo "Tous les champs sont requis.";
        exit;
    }


    $to = "khoumandcompagnie@gmail.com"; 
    $subject = "Message de contact depuis votre site";
    $body = "Nom : $name\nEmail : $email\n\nMessage :\n$message";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Échec de l'envoi du message.";
    }
}

