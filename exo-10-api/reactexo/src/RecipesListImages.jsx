import React, { useEffect, useState } from "react"
import './RecipesList.css'

const RecipesListImages = () => {
    const[recipesfromApi, setRecipesfromApi] = useState(false)

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then((dataJson) => {
            return dataJson.json()            
        })
        .then ((response) => {
            setRecipesfromApi(response)
        })
    },[])

    return (
        <section>
            {recipesfromApi ?
                recipesfromApi.meals.map((el) => {
                    return (
                        <article key={el.idMeal}>
                            <h2>Nom : {el.strMeal}</h2>
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

export default RecipesListImages