const root = document.querySelector("#root")

const createTag = (tagParent,tag,className,libelle,imageSource) => {
    const tagToCreate = document.createElement(tag)
    
    // if(className) tagToCreate.classList.add(className)
    if(className) tagToCreate.className = className
    if(libelle) tagToCreate.textContent = libelle
    if(imageSource) {
        tagToCreate.src = imageSource
    }

    document.querySelector(tagParent).appendChild(tagToCreate)
} 

// Structure principale

createTag("#root","header",null,null,null)
createTag("header","div","menu",null,null)
createTag(".menu","a","link-to-accueil button","Accueil",null)
createTag(".menu","a","link-to-page1 button","La Moria",null)
createTag("#root","main",null,null,null)
createTag("main","h1",null,"La Terre du Milieu",null)
createTag("#root","footer",null,null,null)

const buttonAccueil = document.querySelector(".link-to-accueil")
const buttonPage1 = document.querySelector(".link-to-page1")

// Création page accueil

const createAccueil = () => {
    document.querySelector("main").innerHTML = ""

    createTag("main","h1",null,"La Terre du milieu",null)
    createTag("main","img","img-presentation",null,"https://static.fnac-static.com/multimedia/Images/95/95/85/45/4556181-3-1520-2/tsp20200226181754/Carte-de-la-Terre-du-Milieu-Le-49-5-cm-x-69-cm.jpg")  

    buttonAccueil.style.borderBottom = "1px solid white"
    buttonPage1.style.borderBottom = "0px solid white"
}

createAccueil()

// Création page 1

const createPage1 = () => {
    document.querySelector("main").innerHTML = ""

    createTag("main","h1",null,"La Moria",null)
    createTag("main","img","img-presentation",null,"http://jolstatic.fr/www/captures/1993/0/94350.jpg")
    createTag("main","p","p-presentation","La Moria est une ville souterraine du légendaire de l'écrivain britannique J. R. R. Tolkien, apparaissant notamment dans Le Seigneur des anneaux, et plus particulièrement dans La Communauté de l'Anneau.",null)   

    buttonAccueil.style.borderBottom = "0px solid white"
    buttonPage1.style.borderBottom = "1px solid white"
}

// Event listeners

buttonAccueil.addEventListener("click", () => {
    createAccueil()
})

buttonPage1.addEventListener("click", () => {
    createPage1()
})

