// Importation de la fonction useState de React (Hook)
import { useState } from "react"

const Faq = () => {
    // Déclaration de la variable d'état showAnswer, boolean initialisé avec la valeur false
    // Cette variable (et sa valeur) sera préservée après rechargement du composant
    // (la valeur persistera entre deux affichages)
    const[showAnswer ,setShowAnswer ] = useState(false)

    // Fonction appelée après le click sur le bouton 
    const handleClick = () => {
        // La nouvelle valeur de showAnswer est calculée
        // Elle prend la valeur true (qui sera opérante à l'affichage suivant)
        // React rafraichit le composant pour un nouvel affichage
        setShowAnswer(!showAnswer)
    }

    return (
        <div className="divexo">
            <p>Quel est l'âge du Capitaine ?</p>
            {/* La balise p est affichée si showAnswer est vrai */}
            {showAnswer && <p>Réponse : 55 ans</p>}
            {/* Le bouton est affiché si showAnswer est faux */}
            {!showAnswer && <button onClick={handleClick}>Afficher la réponse</button>}
        </div>
    )
}

export default Faq