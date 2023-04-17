import { useEffect, useState } from "react"

const MealsCategoriesList = () => {
    const[categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php?")
            .then((res) => {
                return res.json()          
            })
            .then((res) => {
                setCategories(res.categories)
            })
    },[])

    const changeCategory = (event) => {
        console.log(event.target.value)
    }

    return (
        <section>
            <h1>Catégories de recettes</h1>
            <label>Catégories : </label>
            <select onChange={changeCategory}>
            {categories.map((el) => {
                return (
                    <option key={el.idCategory} value={el.idCategory} label={el.strCategory}></option>
                )
            })}
            </select>
            <hr></hr>
            {categories.map((el) => {
                return (
                    <article key={el.idCategory}>
                        <h2>{el.strCategory}</h2>
                        <p>{el.strCategoryDescription}</p>
                        <img src={el.strCategoryThumb}></img>
                    </article>
                )
            })}
        </section>
    )
}

export default MealsCategoriesList