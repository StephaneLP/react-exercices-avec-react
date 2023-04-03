import React, { useEffect, useState } from "react"
import RecipesList from "./RecipesList";
import RecipesListImages from "./RecipesListImages";

function App() {
    const[blnAffiche, setBlnAffiche] = useState(false)
    const[blnAfficheImages, setBlnAfficheImages] = useState(false)

    const affichePlats = () => {
        setBlnAffiche(true)
        setBlnAfficheImages(false)
    }

    const affichePlatsImages = () => {
        setBlnAffiche(false)
        setBlnAfficheImages(true)        
    }

    return (
        <div>
            <button onClick={affichePlats}>Afficher les plats</button>
            <button onClick={affichePlatsImages}>Afficher les images uniquement !</button>
            {blnAffiche && <RecipesList />}
            {blnAfficheImages && <RecipesListImages />}
        </div>
    );
}

export default App;
