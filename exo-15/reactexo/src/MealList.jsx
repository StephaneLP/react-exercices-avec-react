import { useEffect, useState } from "react"
import Header from "./Header"
import "./style.css"

const MealList = () => {
    const[mealsList, setMealsList] = useState([])
    const[mealDetails, setMealDetails] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setMealsList(res.meals)
            })
    },[])

    const handleClick = (id) => {
       fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                console.log(res.meals[0].strMeal)
                setMealDetails(res.meals[0])
            })
    }

    return (
        <>
            <Header />
            <section className="recettes">
                <h1>Recettes de cuisine</h1>
                <div style={{textAlign: "center"}}>
                {mealsList.length !== 0 ?
                    (
                        mealsList.map((el) => {
                        return (
                            <button key={el.idMeal} onClick={() => handleClick(el.idMeal)}>{el.strMeal}</button>
                        )})
                    )
                    :
                    (
                        <span>CHARGEMENT...</span>
                    )
                }
                </div>
                {mealDetails.length !== 0 ?
                    (
                        <div className="detailsPlat">
                            <div>
                                <img style={{width: 400 + "px"}} src={mealDetails.strMealThumb}></img> 
                            </div>
                            <div className="detailsInfos">
                                <h2>{mealDetails.strMeal}</h2>
                                <h3>Catégorie : </h3>
                                <p>{mealDetails.strCategory}</p>
                                <h3>Région : </h3>
                                <p>{mealDetails.strArea}</p>
                                <h3>Recette : </h3>
                                <p className="detailsRecette">{mealDetails.strInstructions}</p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="choixPlat">
                            <h2>Veuillez choisir un plat SVP</h2>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default MealList