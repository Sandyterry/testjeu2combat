// let data ={

//     "Archer" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "3", "Point Défense" : "3", "Attaque Spéciale" : "Flèche Empoisonée", "Description" : "Inflige les dégats d'attaques, plus un point de dégat à chaque tour pendant 2tours", "Points d'Attaque Spécial": "3 + 1 + 1 "},

//     "Guerrier" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "5", "Point Défense" : "4", "Attaque Spéciale" : "Super Force", "Description" : "Inflige les dégats d'attaques plus importants", "Points d'Attaque Spécial": "7"},

//     "Mage" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "5", "Point Défense" : "2", "Attaque Spéciale" : "Sort de paralysie", "Description" : "Empeche le joueur d'attaquer au prochain tour", "Points d'Attaque Spécial": "5 pour chaque tour"},

//     "Prêtre" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "4", "Point Défense" : "3", "Attaque Spéciale" : "Autoguérison", "Description" : "Récupère 1 point de vie par tour pendant 2 tours", "Points de Défense Spécial":"3 puis  + 1 puis + 1"},

//     "Prêtresse" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "4", "Point Défense" : "3", "Attaque Spéciale" : "Autoguérison", "Description" : "Récupère 1 point de vie par tour pendant 2 tours", "Points de Défense Spécial":"3 puis  + 1 puis + 1"},

//     "Guerrière" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "5", "Point Défense" : "4", "Attaque Spéciale" : "Super Force", "Description" : "Inflige les dégats d'attaques plus importants", "Points d'Attaque Spécial": "7"}
// }

// variable pour stocker le chemin de l'image
let imageSelectionnee1 = "";
let imageSelectionnee2 = ""

// let classePersonnage = ""

function selectionnerPersonnage(personnage) {
    // // Affiche l'ID du personnage sélectionné pour déboguer
    // alert(personnage);
// let cheminImage = 'images/' + personnage + '.jpg';
      // stocker le chemin de l'image
    //   if(personnage.includes('j1')){
    //   imageSelectionnee1 = cheminImage;}

    //   else if (personnage.includes('j2')){
    //     imageSelectionnee2 = cheminImage;
    //   }

    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer1 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';

    
}



function selectionnerPersonnage2(personnage) {
    // // Affiche l'ID du personnage sélectionné pour déboguer
    // alert(personnage);

    // stocker le chemin de l'image
    // imageSelectionnee2 = cheminImage2;

    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer2 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';
}

// function afficherImagePlusTardJ1() {
//     if (imageSelectionnee1){

//         // creer un element d'image
//         let = image1 = document.createElement('img');
//         image.src = imageSelectionnee1;

// // ajoutez l'iamge au conteneur de reception aire de combat

//         let conteneurImage1 = document.getElementById('combatGauche');

//         conteneurImage1.innerHTML = ''; 

//         // effacer le contenu precedent

//         conteneurImage1.appendChild(image1)

//     }
// }

// function afficherImagePlusTardJ2() {
//     if (imageSelectionnee2){

//         // creer un element d'image
//         let = image2 = document.createElement('img');
//         image2.src = imageSelectionnee2;

// // ajoutez l'iamge au conteneur de reception aire de combat

//         let conteneurImage2 = document.getElementById('combatDroite');

//         conteneurImage2.innerHTML = ''; 

//         // effacer le contenu precedent

//         conteneurImage2.appendChild(image2)

//     }
// }


const choixcharacter = document.querySelector('.choixcharacter')
const btnCombatStart = document.querySelector('.btnCombatStart');
const principal = document.querySelector('.principal');
const aireDeCombat = document.querySelector('.aireDeCombat');
const pointsdeviecontainer= document.querySelector('.pointsdeviecontainer')

btnCombatStart.addEventListener('click', () => {
    principal.style.display = "none";
    choixcharacter.style.display = "none";
    aireDeCombat.style.display = "flex";
    pointsdeviecontainer.style.display = "flex";
    afficherImagePlusTard();
});

// bouton combat gauche

const btnAttaqueGauche = document.querySelector('.btnAttaqueGauche');

btnAttaqueGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé une attaque')
})


const btnCapaGauche = document.querySelector('.btnCapaGauche');

btnCapaGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé sa capacité spéciale')
})

// bouton combat droite

const btnAttaqueDroite = document.querySelector('.btnAttaqueDroite');

btnAttaqueDroite.addEventListener('click', () => {
    console.log('le joueur droit a lancé une attaque')
})



const btnCapaDroite = document.querySelector('.btnCapaDroite');

btnCapaDroite.addEventListener('click', () => {
    console.log('le joueur droit a lancé sa capacité spéciale')
})

// Affichage des personnages selectionnés dans l'aire de combat.

// const selectPlayer1 = document.querySelector('.selectionPlayer1')
// const selectPlayer2 = document.querySelector('.selectionPlayer2')

// au moment de selectionner les sources, je les mets dans la variable selectplayer1 et selectplayer2

// au moment de lancer le combat je selectionne les sources des images

// fonction pour afficher l'image selectionnée plus tard

