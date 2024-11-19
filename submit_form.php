<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données envoyées par le formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Vous pouvez ensuite traiter ces données : les afficher, les enregistrer dans une base de données, ou les envoyer par email.

    // Exemple : afficher les données sur la page
    echo "Nom: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
    echo "Message: " . nl2br(htmlspecialchars($message)) . "<br>";

    // Optionnel : envoyer un email avec les informations du formulaire
    // mail($email, "Nouvelle soumission de formulaire", $message);
}
?>
$conn = new mysqli("localhost", "username", "password", "database");

if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();

echo "Message enregistré avec succès!";

$stmt->close();
$conn->close();

$name = htmlspecialchars($_POST['name']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST['message']);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Adresse email invalide.");
}

