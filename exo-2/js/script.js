// Je créée un tableau de recettes, dont chaque élément - qui constitue une recette - est un objet constitué de 3 propriétés :
// titre, nom de l'image et description 
const tabRecettes = [
    {
        titre: "Spaghettis bolognaise",
        image: "spaghettis",
        description: "C'est italien, simple et délicieux",
    },
    {
        titre: "Canard laqué",
        image: "canard",
        description: "Le fleuron de la cuisine chinoise, miam miam !",
    },    {
        titre: "Galette Bretonne complète",
        image: "galette",
        description: "Ils ont les chaperons et les galettes !",
    },    {
        titre: "Pizza 4 fromages",
        image: "pizza",
        description: "Encore un plat italien, encore un classique !",
    }
]

// Je cible l'élément HTML button#btn-load-recipe qui recevra les recettes
const btnLoadRecipe = document.querySelector(".btn-load-recipe")

// J'ajoute à l'élément HTML button#btn-load-recipe un écouteur d'évènements :
// L'évènement click déclenchera l'appel de la fonction afficheRecette()
btnLoadRecipe.addEventListener("click",()=>{
    afficheRecette();
})

// Définition de la fonction afficheRecette()
const afficheRecette = () => {
    // Je cible l'élément HTML div#recipes
    const recipe = document.querySelector("#recipes")

    //Je vide l'élément HTML div#recipes de son contenu prééxistant
    recipe.replaceChildren()

    // Je créée des éléments HTML de type :
    // article : qui contiendra la recette
    // h2 : qui recevra le titre de la recette
    // img : qui recevra l'image de la recette
    // p : qui recevra la description de la recette
    const article = document.createElement("article")   
    const titre = document.createElement("h2")
    const image = document.createElement("img")
    const recette = document.createElement("p")

    // Je créée un index tiré aléatoirement entre 0 et la longueur-1 du tableau recettes
    const index = getRandomIntInclusive(0,tabRecettes.length-1)

    // J'attribue aux éléments HTML créés les valeurs provenant du tableau recettes
    // Avec l'index aléatoire et l'objet recette ciblé
    titre.textContent = tabRecettes[index].titre
    image.src = "./assets/img/" +  tabRecettes[index].image + ".jpg"
    image.style.width = "100%"
    recette.innerHTML = tabRecettes[index].description

    // Jajoute au parent article les enfants h2, img et p
    article.appendChild(titre)
    article.appendChild(image)
    article.appendChild(recette)

    // Jajoute au parent recipe l'enfant article
        recipe.appendChild(article)   
}

// Fonction permettant d'obtenir un entier tiré aléatoirement entre les valeurs min et max incluses
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}

tableau = [0,8,6,4,7,3,2,5]
console.log(randomArray(5,tableau))

function randomArray(n,array){
    let tab = array.slice()
    let tabRes = []
    let indice

    for(let i=0; i<n; i++){
        indice = getRandomIntInclusive(0, tab.length-1)
        tabRes.push(tab[indice])
        tab.splice(indice,1)
    }
    return tabRes
}