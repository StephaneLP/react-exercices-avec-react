import './Header.scss';

const isUserLoggedIn = true;

const Header = () => {
    return (
        <header>
            <div>
                <img className="header-logo" src="https://www.pngplay.com/wp-content/uploads/2/Star-Wars-Logo-Transparent-Image.png"></img>                
            </div>
            <nav>
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a target="_blank" href="https://www.cinetrafic.fr/liste-film/711/1/star-wars-une-saga-galactique">Les films</a></li>
                    <li><a target="_blank" href="https://www.senscritique.com/liste/les_meilleurs_series_star_wars/3345433">Les séries</a></li>
                    <li><a target="_blank" href="https://www.chroniquedisney.fr/livre-LUCAS/romans-lucas-books-star-wars.htm">Les romans</a></li>
                    <li><a target="_blank" href="https://www.chroniquedisney.fr/livre-LUCAS/comics-star-wars.htm">Les BD</a></li>
                </ul>
            </nav>
            <p>{isUserLoggedIn ? "Bienvenue Stéphane" : <a href="#">Connexion</a>}</p>
        </header>
    )
}

export default Header