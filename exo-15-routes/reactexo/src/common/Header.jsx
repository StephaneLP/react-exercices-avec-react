import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()

    return (
        <header>
            <nav>
                <ul>
                    <li className={location.pathname === "/" ? "actif" : ""}> <Link to="/"> Accueil</Link></li>
                    <li className={location.pathname === "/meal-list" ? "actif" : ""}><Link to="/meal-list">Recettes de cuisine</Link></li>
                    <li className={location.pathname === "/meal-random" ? "actif" : ""}><Link to="/meal-random">Recette Random</Link></li>
                    <li className={location.pathname === "/meal-categories" ? "actif" : ""}><Link to="/meal-categories">Catégories</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header