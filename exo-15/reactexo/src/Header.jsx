import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    console.log(location.pathname)

    return (
        <header>
            <nav>
                <ul>
                    <li><Link className="actif" to="/MealList">Recettes de cuisine</Link></li>
                    <li><Link to="/MealRandom">Recette Random</Link></li>
                    <li><Link to="/MealsCategoriesList">Catégories</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header