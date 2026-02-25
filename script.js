// je vais resté dans l'univers de wave
// je veux afficher le slde d'un compte wave

// je selectionne des elements de lapage html
const bouton = document.getElementById('btn');
const affichage = document.getElementById('resultat');

// je clique sur le bouton
bouton.addEventListener("click",()=> {
    affichage.innertext = "chargement en cours...";

    // je vais utiliser la methode fetch 
    // qui sert a effectué une requête
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(utilisateur => {
        affichage.innerHTML= ` Bienvenue, ${utilisateur.name} 
        <p> Votre solde est de: 30 000FCFA`;
    })
    .catch(erreur=>{
        affichage.innerText = "Erreur de connexion à l'API.";
        console.error(erreur);
    });
});