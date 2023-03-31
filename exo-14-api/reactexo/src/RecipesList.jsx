import React, { useEffect, useState } from "react"

const RecipesList = () => {
    const[recipesfromApi, setRecipesfromApi] = useState(false)

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then((dataJson) => {
            return dataJson.json()            
        })
        .then ((response) => {
            console.log("arret")
            setRecipesfromApi(response)
        })
    },[])

    console.log("stop")

    return (
        <section>
            {recipesfromApi ?
                recipesfromApi.meals.map((el) => {
                    return (
                        <article key={el.idMeal}>
                            <p>Nom : {el.strMeal}</p>
                            <p>Source : {el.strSource}</p>
                            <p>Recette : {el.strInstructions}</p>
                            <img src={el.strMealThumb}></img>
                        </article>                    
                    )
                })         
            :
                <p><img src="https://i.pinimg.com/originals/01/28/46/0128468e98f1312cb40ef96218f4f6a5.gif"></img>
                </p>
            }
        </section>
    )
}

export default RecipesList