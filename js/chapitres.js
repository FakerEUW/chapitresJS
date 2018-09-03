var content = [["Il y a bien longtemps, dans une galaxie lointaine, très lointaine...", "Le Commencement", ""],
["", "Chapitre 1 : La Menace Fantôme", "J'ai pigé le truc"],
["", "Chapitre 2 : L'attaque des clones", "Pareil pour le titre"],
["", "Chapitre 3 : La Revenche des Sith", "Tordu, non ?"],
["", "Chapitre 4 : Un nouvel espoir", "Le meilleur selon moi"],
["", "Chapitre 5 : L'empire contre-attaque", "L'empire contre-attaque"],
["", "Chapitre 6 : Le retour du Jedi", "Wabba Labba DUB DUB"]
];

for (let i = 0; i < content.length; i++) {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<h1 style="text-align:center;font-size:2em;background-color:black;color:white;">${content[i][0]}</h1><h2 style="text-align:center;color:white;background-color:black;">${content[i][1]}</h2><p style="text-align:center;font-size:1.5em;color:white;background-color:black;">${content[i][2]}</p>`)
}
var text = "";
document.querySelector('.submit').onclick = function () {
    var recup = document.querySelector('.content');
    content = recup.value;
    recup.value = "";
}


var debile = document.querySelector(".submit");
var tit = document.querySelector(".titre");
var nom = document.querySelector(".nom");
var ctnt = document.querySelector(".content");

debile.onclick = function () {
    tit.value = "";
    nom.value = "";
    ctnt.value = "";
}





/* var participation = document.document.querySelector('articipation')
participation.addEventListener('submit', function(e) {

    var result = true;

    for (var i in check) {
        result = check[i](i) && result;
    }

    if (result) {
        alert('Le formulaire est bien rempli.');
    }

    e.preventDefault();

});

var contenu = function() {
    var h1 = document.querySelectorAll("h1");
    var newh1 = new h1;
    console.log(newh1);
    
} */