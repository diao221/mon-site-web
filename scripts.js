// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Tous les champs doivent être remplis !");
    } else {
        alert("Formulaire soumis avec succès !");
        // Tu peux ajouter une logique pour envoyer les données au serveur ici
    }
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let errors = [];

    // Validation
    if (name === "") {
        errors.push("Le champ nom ne peut pas être vide.");
    }

    if (email === "") {
        errors.push("Le champ email ne peut pas être vide.");
    } else if (!validateEmail(email)) {
        errors.push("L'email n'est pas valide.");
    }

    if (message === "") {
        errors.push("Le champ message ne peut pas être vide.");
    }

    // Afficher les erreurs ou soumettre le formulaire
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Formulaire soumis avec succès !");
        // Tu peux ici envoyer le formulaire via une API ou autre
    }
});

function validateEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}
// Fonction pour ajouter la classe "visible" lors du défilement
function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

// Écouteur d'événement pour surveiller le défilement
window.addEventListener('scroll', revealOnScroll);

// Initialisation au chargement de la page
revealOnScroll();
// Sélectionner toutes les images de la galerie
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Afficher l'image en plein écran
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

// Fermer la lightbox
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});
// Exemple d'appel à une API pour afficher des informations météo
const apiKey = 'your_api_key'; // Remplace par ta clé API
const city = 'Paris';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `
            <h2>Météo à ${city}</h2>
            <p>${data.weather[0].description}</p>
            <p>Température : ${data.main.temp}°C</p>
        `;
    })
    .catch(error => console.log('Erreur :', error));
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher l'envoi classique du formulaire
        
        // Collecte des données du formulaire
        const formData = new FormData(document.getElementById("contactForm"));
        
        // Créer une requête AJAX pour envoyer les données
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_form.php", true);
        
        // Gérer la réponse du serveur
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById("responseMessage").innerHTML = "Votre message a été envoyé avec succès!";
            } else {
                document.getElementById("responseMessage").innerHTML = "Une erreur est survenue. Veuillez réessayer.";
            }
        };
        
        // Envoyer les données
        xhr.send(formData);
    });
    