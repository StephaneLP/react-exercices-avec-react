const title = document.createElement("h1")
title.textContent = "La terre du milieu"

const subtitle = document.createElement("h2")
subtitle.textContent = "Entrée des mines de la Moria"

const image = document.createElement("img")
image.style.border = "5px solid white"
image.src = "http://jolstatic.fr/www/captures/1993/0/94350.jpg"

const presentation = document.createElement("p")
presentation.textContent = "La Moria est une ville souterraine du légendaire de l'écrivain britannique J. R. R. Tolkien, apparaissant notamment dans Le Seigneur des anneaux, et plus particulièrement dans La Communauté de l'Anneau. Les ruines de cette ancienne cité naine de la Terre du Milieu, située sous la chaîne des Montagnes de Brume, sont traversées par les membres de la Communauté de l'Anneau qui cherchent à franchir les montagnes."

const root = document.querySelector("#root")
root.appendChild(title)
root.appendChild(subtitle)
root.appendChild(image)
root.appendChild(presentation)

// const header = document.createElement("header")
// header.style.backgroundColor = "darkgrey"
// header.style.height = "100px"

// const footer = document.createElement("footer")
// footer.style.backgroundColor = "grey"
// footer.style.height = "100px"






