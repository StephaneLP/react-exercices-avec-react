// L'élément HTML <button> est ciblé grace à la variable btn
const btn = document.querySelector("button")

// Un écouteur d'évènements est ajouté à l'élément ciblé par la variable btn
// La fonction est déclenchée par l'évènement 'click'
btn.addEventListener("click", () => {
    // La fonction fetch permet d'interroger une API (via une url PHP)
    // et de récupérer une réponse au format json
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")

    // La réponse json est récupérée via paramètre dataJson
    // puis convertie (et retournée) au format javascript à l'aide de la fonction json()

    .then((dataJson) => {
        return (dataJson.json())
    })

    // La réponse, maintenant convertie au format javascript, est récupérée via le paramètre dataJS
    // puis affichée dans la console du navigateur
    .then((dataJS) => {
        console.log(dataJS)
    })
})