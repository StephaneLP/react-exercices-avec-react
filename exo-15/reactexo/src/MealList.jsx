import { useEffect, useState } from "react"

const MealList = () => {
    const[meals, setMeals] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setMeals(res.meals)
            })
    },[])

    return (
        <section>
            <div>Recettes de cuisine</div>
            {meals.length !== 0 ?
                (meals.map((el) => {
                    return (
                        <article key={el.idMeal}>
                            <h2>Nom : {el.strMeal}</h2>
                            <p>Recette : {el.strInstructions}</p>
                            <img style={{width: 400 + "px"}} src={el.strMealThumb}></img>
                        </article>
                    )
                }))
                :
                (<span>CHARGEMENT...</span>)
            }
        </section>
    )
}

export default MealList