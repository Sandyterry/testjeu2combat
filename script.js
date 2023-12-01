let data ={

    "archerj1" :{ Nom: "Archer" , Pointsdevie : "30" , PointsdAttaque : "3", PointsDefense : "3", AttaqueSpciale : "Flèche Empoisonée", Description : "Inflige les dégats d'attaques, plus un point de dégat à chaque tour pendant 2tours", PointsAttaqueSpécial: "3 + 1 + 1 "},

    "guerrierj1" :{ Nom: "Guerrier" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "4", AttaqueSpeciale : "Super Force", Description : "Inflige les dégats d'attaques plus importants", PointsAttaqueSpécial: "7"},

    "magej1" :{Nom: "Mage" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "2", AttaqueSpeciale : "Sort de paralysie", Description : "Empeche le joueur d'attaquer au prochain tour", "Points d'Attaque Spécial": "5 pour chaque tour"},

    "pretrej1" :{Nom: "Prêtre" , Pointsdevie : "30" , PointsdAttaque : "4", PointsDefense : "3", AttaqueSpeciale : "Autoguérison", Description : "Récupère 1 point de vie par tour pendant 2 tours", PointsDefenceSpéciale:"3 puis  + 1 puis + 1"},

    "pretrej2" :{Nom: "Prêtresse" , Pointsdevie : "30" , PointsdAttaque : "4", PointsDefense : "3", AttaqueSpeciale: "Autoguérison", Description : "Récupère 1 point de vie par tour pendant 2 tours", PointsDefenseSpeciale:"3 puis  + 1 puis + 1"},

    "guerrierj2" :{Nom:"Guerrière" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "4", AttaqueSpeciale : "Super Force", Description : "Inflige les dégats d'attaques plus importants", PointsAttaqueSpécial: "7"},

    "magej2" :{Nom: "Mage" , Pointsdevie : "30" , PointsdAttaque : "5", PointsDefense : "2", AttaqueSpeciale : "Sort de paralysie" , Description : "Empeche le joueur d'attaquer au prochain tour", PointsAttaqueSpécial: "5 pour chaque tour"},
    
    "archerj2" : { Nom: "Archer" , Pointsdevie : "30" , PointsdAttaque : "3", PointsDefense : "3", AttaqueSpeciale :  "Flèche Empoisonée", Description : "Inflige les dégats d'attaques, plus un point de dégat à chaque tour pendant 2tours", PointsAttaqueSpécial: "3 + 1 + 1 "},
}

// variable pour afficahge de l'image
let imageSelectionnee1 = "";
let imageSelectionnee2 = ""


function selectionnerPersonnage(personnage) {
    // // Affiche l'ID du personnage sélectionné pour déboguer
    // alert(personnage);


    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer1 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';

    imageSelectionnee1=personnage
}



function selectionnerPersonnage2(personnage) {
    // // Affiche l'ID du personnage sélectionné pour déboguer
    // alert(personnage);

 

    // Masquer tous les autres personnages
    let tousLesPersonnages = document.querySelectorAll('.allcontainer2 > div');
    tousLesPersonnages.forEach(function (element) {
        element.style.display = 'none';
    });

    // Afficher le personnage sélectionné
    let personnageSelectionne = document.querySelector('.' + personnage);
    personnageSelectionne.style.display = 'block';

    imageSelectionnee2=personnage
}



// variable défini pour affichage de l'aire de combat

const choixcharacter = document.querySelector('.choixcharacter')
const btnCombatStart = document.querySelector('.btnCombatStart');
const principal = document.querySelector('.principal');
const aireDeCombat = document.querySelector('.aireDeCombat');
const pointsdeviecontainer= document.querySelector('.pointsdeviecontainer');

// const nomPersoJ1 =document.querySelector('.nomPersoJ1');
// const ptVieJ1 = document.querySelector('.ptVieJ1');
// const ptAttqJ1 = document.querySelector('.ptAttqJ1');
// const ptDefJ1 = document.querySelector('.ptDefJ1');
// const attaqSpeJ1 = document.querySelector('.attaqSpeJ1');
// const descriptionJ1= document.querySelector('.descriptionJ1');
// const ptAttqSpeJ1 = document.querySelector('.ptAttqSpeJ1');

// const nomPersoJ2 = document.querySelector('.nomPersoJ2');
// const ptVieJ2 = document.querySelector('.ptVieJ2');
// const ptAttqJ2 = document.querySelector('.ptAttqJ2');
// const ptDefJ2 = document.querySelector('.ptDefJ2');
// const attaqSpeJ2 = document.querySelector('.attaqSpeJ2');
// const descriptionJ2= document.querySelector('.descriptionJ2');
// const ptAttqSpeJ2 = document.querySelector('.ptAttqSpeJ2');

const cartecapacitesG = document.querySelector('.cartecapacitesG');
// Evenement au clic du bouton demarrer combat

btnCombatStart.addEventListener('click', () => {
    principal.style.display = "none";
    choixcharacter.style.display = "none";
    aireDeCombat.style.display = "flex";
    pointsdeviecontainer.style.display = "flex";

// Affichage du joueur selectionner dans l'aire de combat

    if (imageSelectionnee1 === 'archerj1'){
        document.querySelector(".imgCombatGauche").src="../images/archerfem.jpg"};
    
    if(imageSelectionnee1 === 'guerrierj1'){
        document.querySelector(".imgCombatGauche").src="../images/guerrier.jpg"}

    if(imageSelectionnee1 === 'magej1'){
        document.querySelector(".imgCombatGauche").src="../images/mage fem.jpg"}
    
    if(imageSelectionnee1 === 'pretrej1'){
        document.querySelector(".imgCombatGauche").src="../images/pretre.jpg"}

    if(imageSelectionnee2 === 'guerrierj2'){
        document.querySelector(".imgCombatDroite").src="../images/guerriere.jpg"}

    if(imageSelectionnee2 === 'archerj2'){
        document.querySelector(".imgCombatDroite").src="../images/archer.jpg"}

    if(imageSelectionnee2 === 'magej2'){
        document.querySelector(".imgCombatDroite").src="../images/mage hom.jpg"}

    if(imageSelectionnee2 === 'pretrej2'){
        document.querySelector(".imgCombatDroite").src="../images/pretresse.jpg"}

    cartecapacitesG.innerHTML= '<h1 class="nomPersoJ1">'+personnage.nom+'</h1> <h4 class="ptVieJ1">Nombre de point de vie:'+Pointsdevie+'</h4><h4 class="ptAttqJ1">Points d\'Attaque :'+PointsdAttaque+'</h4><h4 class="ptDefJ1">Point Défense : '+PointsDefense+'</h4><h4 class="attaqSpeJ1">Attaque Spéciale : '+AttaqueSpeciale+'</h4><h4 class="descriptionJ1">'+Description+'</h4><h4 class="ptAttqSpeJ1">Points d\'Attaque Spécial:'+PointsAttaqueSpécial+' </h4>'
    
    // cartecapacitesD.innerHTML=

});

// Constante  pour affichage de la carte du personnage




// concatainer
    // console.log(`${nom} ${prenom} a ${age} ans et aime ${passion}` )






// Boutons combat gauche

const btnAttaqueGauche = document.querySelector('.btnAttaqueGauche');

btnAttaqueGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé une attaque')
})


const btnCapaGauche = document.querySelector('.btnCapaGauche');

btnCapaGauche.addEventListener('click', () => {
    console.log('le joueur gauche a lancé sa capacité spéciale')
})

// Boutons combat droite

const btnAttaqueDroite = document.querySelector('.btnAttaqueDroite');

btnAttaqueDroite.addEventListener('click', () => {
    console.log('le joueur droit a lancé une attaque')
})



const btnCapaDroite = document.querySelector('.btnCapaDroite');

btnCapaDroite.addEventListener('click', () => {
    console.log('le joueur droit a lancé sa capacité spéciale')
})


