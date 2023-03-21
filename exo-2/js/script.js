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

const btnLoadRecipe = document.querySelector(".btn-load-recipe")

btnLoadRecipe.addEventListener("click",()=>{
    afficheRecette();
})

const afficheRecette = () => {
    const recipe = document.querySelector("#recipes")
    const article = document.createElement("article")   
    const titre = document.createElement("h2")
    const image = document.createElement("img")
    const recette = document.createElement("p")
    const index = getRandomIntInclusive(0,tabRecettes.length-1)

    recipe.replaceChildren()
    titre.textContent = tabRecettes[index].titre
    image.src = "./assets/img/" +  tabRecettes[index].image + ".jpg"
    image.style.width = "100%"
    recette.innerHTML = tabRecettes[index].description

    article.appendChild(titre)
    article.appendChild(image)
    article.appendChild(recette)
    recipe.appendChild(article)   
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min
}

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