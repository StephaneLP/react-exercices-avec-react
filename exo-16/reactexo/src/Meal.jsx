import { useEffect, useState } from "react"

const Meal = () => {
    const [meal, setMeal] = useState(null)

    const loadMeal = () => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res.meals[0])
                setMeal(res.meals[0])
            })        
    }

    useEffect(() => {
        loadMeal()
    },[])

    const handleClick = () => {
        loadMeal()
    }
    
    return (
        <section>
            <h1>Recette aléatoire</h1>
            {meal === null ?
                (
                    <p>Chargement...</p>
                )
                :
                (
                    <div>
                        <h2>{meal.strMeal}</h2>
                        <img style={{width: 400 + "px"}} src={meal.strMealThumb}></img> 
                        <br />
                        <button onClick={handleClick}>Changer de recette</button>
                    </div>
                )
            }
     </section>
    )
}

export default Meal